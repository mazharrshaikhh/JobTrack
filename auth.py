
from flask import Blueprint, render_template, redirect, url_for, flash, request, session

from flask_login import login_user, logout_user

from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

from database import db, User


auth = Blueprint("auth", __name__)


@auth.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        if not name or not email or not password:
            flash("Please fill in all fields.", "error")
            return redirect(url_for("auth.register"))

        if len(password) < 8:
            flash("Password must contain at least 8 characters.", "error")
            return redirect(url_for("auth.register"))

        existing_user = User.query.filter_by(email=email).first()

        if existing_user:
            flash("This email is already registered.", "error")
            return redirect(url_for("auth.register"))

        hashed_password = generate_password_hash(password)

        new_user = User(
            name=name,
            email=email,
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        login_user(new_user)

        # Cinematic intro only after successful registration
        session["show_intro"] = True

        flash("Account created successfully!", "success")

        return redirect(url_for("dashboard"))

    return render_template("register.html")


@auth.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        user = User.query.filter_by(email=email).first()

        if user and check_password_hash(user.password, password):

            login_user(user)

            # Cinematic intro only after successful login
            session["show_intro"] = True

            flash("Welcome back!", "success")

            return redirect(url_for("dashboard"))

        flash("Invalid email or password.", "error")

    return render_template("login.html")


@auth.route("/logout")
def logout():

    logout_user()

    session.pop("show_intro", None)

    flash("You have been logged out.", "success")

    return redirect(url_for("auth.login"))
