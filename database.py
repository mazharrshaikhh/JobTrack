
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)

    email = db.Column(
        db.String(150),
        unique=True,
        nullable=False
    )

    password = db.Column(db.String(255), nullable=False)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    applications = db.relationship(
        "Application",
        backref="user",
        lazy=True,
        cascade="all, delete-orphan"
    )


class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    company = db.Column(db.String(150), nullable=False)

    position = db.Column(db.String(150), nullable=False)

    location = db.Column(db.String(150))

    job_type = db.Column(db.String(50))

    salary = db.Column(db.String(100))

    job_link = db.Column(db.String(500))

    status = db.Column(
        db.String(50),
        default="Applied"
    )

    applied_date = db.Column(
        db.Date,
        default=datetime.utcnow
    )

    notes = db.Column(db.Text)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )
