
import os

class Config:
    SECRET_KEY = os.environ.get(
        "SECRET_KEY",
        "jobtrack-secret-key-2026-development"
    )

    SQLALCHEMY_DATABASE_URI = "sqlite:///jobtrack.db"

    SQLALCHEMY_TRACK_MODIFICATIONS = False
