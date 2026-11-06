
from flask import Flask, render_template, redirect, url_for
from flask import request, flash

from flask_login import LoginManager, login_required, current_user

from datetime import datetime

from config import Config
from database import db, User, Application

from auth import auth


app = Flask(__name__)

app.config.from_object(Config)

# Database setup
db.init_app(app)

# Login system setup
login_manager = LoginManager()

login_manager.init_app(app)

login_manager.login_view = "auth.login"

login_manager.login_message = "Please login to continue."


@login_manager.user_loader
def load_user(user_id):

    return db.session.get(User, int(user_id))


# Register authentication routes
app.register_blueprint(auth)


# Create database tables
with app.app_context():

    db.create_all()


# Home page
@app.route("/")
def home():

    if current_user.is_authenticated:

        return redirect(url_for("dashboard"))

    return redirect(url_for("auth.login"))


# Dashboard
@app.route("/dashboard")
@login_required
def dashboard():

    applications = Application.query.filter_by(
        user_id=current_user.id
    ).all()

    total = len(applications)

    interviews = sum(
        1 for item in applications
        if item.status == "Interview"
    )

    offers = sum(
        1 for item in applications
        if item.status == "Offer"
    )

    rejected = sum(
        1 for item in applications
        if item.status == "Rejected"
    )

    applied = sum(
        1 for item in applications
        if item.status == "Applied"
    )

    assessment = sum(
        1 for item in applications
        if item.status == "Assessment"
    )

    success_rate = (
        round((offers / total) * 100, 1)
        if total > 0 else 0
    )

    recent_applications = Application.query.filter_by(
        user_id=current_user.id
    ).order_by(
        Application.applied_date.desc()
    ).limit(5).all()

    return render_template(
        "dashboard.html",
        total=total,
        interviews=interviews,
        offers=offers,
        rejected=rejected,
        applied=applied,
        assessment=assessment,
        success_rate=success_rate,
        recent_applications=recent_applications
    )


# View all applications
@app.route("/applications")
@login_required
def applications():

    search = request.args.get("search", "").strip()

    status = request.args.get("status", "").strip()

    query = Application.query.filter_by(
        user_id=current_user.id
    )

    if search:

        query = query.filter(
            db.or_(
                Application.company.ilike(f"%{search}%"),
                Application.position.ilike(f"%{search}%")
            )
        )

    if status:

        query = query.filter_by(status=status)

    all_applications = query.order_by(
        Application.applied_date.desc()
    ).all()

    return render_template(
        "applications.html",
        applications=all_applications,
        search=search,
        status=status
    )


# Add new application
@app.route("/applications/add", methods=["GET", "POST"])
@login_required
def add_application():

    if request.method == "POST":

        company = request.form.get("company", "").strip()

        position = request.form.get("position", "").strip()

        if not company or not position:

            flash("Company and job position are required.", "error")

            return redirect(url_for("add_application"))

        date_text = request.form.get("applied_date", "")

        try:

            applied_date = (
                datetime.strptime(date_text, "%Y-%m-%d").date()
                if date_text
                else datetime.today().date()
            )

        except ValueError:

            applied_date = datetime.today().date()

        new_application = Application(

            company=company,

            position=position,

            location=request.form.get("location", "").strip(),

            job_type=request.form.get("job_type", "").strip(),

            salary=request.form.get("salary", "").strip(),

            job_link=request.form.get("job_link", "").strip(),

            status=request.form.get("status", "Applied"),

            applied_date=applied_date,

            notes=request.form.get("notes", "").strip(),

            user_id=current_user.id
        )

        db.session.add(new_application)

        db.session.commit()

        flash("Application added successfully!", "success")

        return redirect(url_for("applications"))

    return render_template("add_application.html")


# Edit application
@app.route("/applications/edit/<int:application_id>", methods=["GET", "POST"])
@login_required
def edit_application(application_id):

    application = Application.query.filter_by(
        id=application_id,
        user_id=current_user.id
    ).first_or_404()

    if request.method == "POST":

        application.company = request.form.get(
            "company", ""
        ).strip()

        application.position = request.form.get(
            "position", ""
        ).strip()

        application.location = request.form.get(
            "location", ""
        ).strip()

        application.job_type = request.form.get(
            "job_type", ""
        ).strip()

        application.salary = request.form.get(
            "salary", ""
        ).strip()

        application.job_link = request.form.get(
            "job_link", ""
        ).strip()

        application.status = request.form.get(
            "status", "Applied"
        )

        date_text = request.form.get("applied_date", "")

        if date_text:

            try:

                application.applied_date = datetime.strptime(
                    date_text, "%Y-%m-%d"
                ).date()

            except ValueError:

                pass

        application.notes = request.form.get(
            "notes", ""
        ).strip()

        db.session.commit()

        flash("Application updated successfully!", "success")

        return redirect(url_for("applications"))

    return render_template(
        "add_application.html",
        application=application,
        edit_mode=True
    )


# Delete application
@app.route("/applications/delete/<int:application_id>", methods=["POST"])
@login_required
def delete_application(application_id):

    application = Application.query.filter_by(
        id=application_id,
        user_id=current_user.id
    ).first_or_404()

    db.session.delete(application)

    db.session.commit()

    flash("Application deleted successfully.", "success")

    return redirect(url_for("applications"))


# Kanban board
@app.route("/kanban")
@login_required
def kanban():

    all_applications = Application.query.filter_by(
        user_id=current_user.id
    ).all()

    statuses = [
        "Applied",
        "Assessment",
        "Interview",
        "Offer",
        "Rejected"
    ]

    grouped_applications = {

        status: [
            application
            for application in all_applications
            if application.status == status
        ]

        for status in statuses
    }

    return render_template(
        "kanban.html",
        grouped_applications=grouped_applications
    )


# Update application status
@app.route("/applications/update-status/<int:application_id>", methods=["POST"])
@login_required
def update_status(application_id):

    application = Application.query.filter_by(
        id=application_id,
        user_id=current_user.id
    ).first_or_404()

    new_status = request.form.get("status", "")

    valid_statuses = [
        "Applied",
        "Assessment",
        "Interview",
        "Offer",
        "Rejected"
    ]

    if new_status in valid_statuses:

        application.status = new_status

        db.session.commit()

        flash("Application status updated!", "success")

    else:

        flash("Invalid application status.", "error")

    return redirect(request.referrer or url_for("kanban"))


# Interviews page
@app.route("/interviews")
@login_required
def interviews():

    interview_applications = Application.query.filter_by(
        user_id=current_user.id,
        status="Interview"
    ).order_by(
        Application.applied_date.desc()
    ).all()

    return render_template(
        "interviews.html",
        interviews=interview_applications
    )


# Analytics
@app.route("/analytics")
@login_required
def analytics():

    all_applications = Application.query.filter_by(
        user_id=current_user.id
    ).all()

    total = len(all_applications)

    status_counts = {

        "Applied": 0,
        "Assessment": 0,
        "Interview": 0,
        "Offer": 0,
        "Rejected": 0
    }

    for application in all_applications:

        if application.status in status_counts:

            status_counts[application.status] += 1

    offers = status_counts["Offer"]

    interviews_count = status_counts["Interview"]

    interview_rate = (
        round((interviews_count / total) * 100, 1)
        if total > 0 else 0
    )

    offer_rate = (
        round((offers / total) * 100, 1)
        if total > 0 else 0
    )

    return render_template(
        "analytics.html",
        total=total,
        status_counts=status_counts,
        interview_rate=interview_rate,
        offer_rate=offer_rate
    )


# Settings
@app.route("/settings", methods=["GET", "POST"])
@login_required
def settings():

    if request.method == "POST":

        new_name = request.form.get("name", "").strip()

        if new_name:

            current_user.name = new_name

            db.session.commit()

            flash("Profile updated successfully!", "success")

        return redirect(url_for("settings"))

    return render_template("settings.html")


# Run the application
if __name__ == "__main__":

    app.run(debug=True)
