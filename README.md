# JobTrack – Personal Job Application Management System

JobTrack is a personal job application management system built to help job seekers organize, manage, and track their job search journey from a centralized dashboard.

It provides a structured workspace for maintaining job application records, monitoring application statuses, and managing interview progress.

## Features

- User Registration and Login
- Personalized Dashboard
- Job Application Management (CRUD)
- Add, Edit, and Delete Applications
- Search Applications by Company or Position
- Filter Applications by Status
- Kanban Application Tracking Board
- Interview Tracking
- Application Status Management
- Job Search Analytics Dashboard
- Profile Management
- SQLite Database Integration
- Responsive User Interface

*Include security and user-specific data isolation claims only after verifying their implementation.*

## Application Workflow

**Applied → Assessment → Interview → Offer**

Applications can also be marked as Rejected.

## Technology Stack

| Technology | Purpose |
|---|---|
| Python | Backend Programming |
| Flask | Web Application Framework |
| Flask-SQLAlchemy | ORM and Database Management |
| SQLite | Database |
| Flask-Login | User Authentication |
| Werkzeug | Password Hashing Utilities |
| HTML5 | Web Page Structure |
| CSS3 | UI Design |
| JavaScript | Interactive Features |
| Jinja2 | Dynamic HTML Templates |

## Project Structure

```text
JobTrack/
│
├── app.py
├── auth.py
├── database.py
├── config.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   ├── base.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── applications.html
│   ├── add_application.html
│   ├── kanban.html
│   ├── interviews.html
│   ├── analytics.html
│   └── settings.html
│
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        └── jobtrack-logo.svg
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/mazharrshaikhh/JobTrack.git
```

### 2. Navigate to the project directory

```bash
cd JobTrack
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

**Windows PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the application

```bash
python app.py
```

### 7. Open in your browser

```text
http://127.0.0.1:5000
```

Register an account and start managing your job application records.

## Database Design

### User Table

Stores user account information:

- ID
- Name
- Email
- Password
- Account Creation Date

### Application Table

Stores job application information:

- ID
- Company Name
- Job Position
- Location
- Job Type
- Salary
- Job Posting URL
- Application Status
- Application Date
- Notes
- User ID

## Learning Outcomes

This project provided practical experience with:

- Python backend development
- Flask routing and request handling
- CRUD operations
- Relational database design
- SQLAlchemy ORM
- Authentication and session management
- Password hashing
- Form handling and validation
- Dynamic HTML rendering using Jinja2
- Data filtering and analytics
- Frontend and backend integration

## Future Improvements

- Interview Date and Follow-up Reminders
- Email Notifications
- Resume Version Management
- CSV Export and Import
- Advanced Analytics and Visualizations
- Calendar Integration
- Improved Security and CSRF Protection
- Cloud Database Integration

## Author

Developed as a personal portfolio project to demonstrate practical skills in Python, Flask, database management, and web application development.