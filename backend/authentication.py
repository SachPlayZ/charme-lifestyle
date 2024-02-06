from flask import render_template
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
from forms import LoginForm, SignupForm

def login():
    form = LoginForm()

    if form.validate_on_submit():
        # Validate login credentials (example: check against the database)
        username = form.username.data
        password = form.password.data
        user = User.query.filter_by(username=username).first()

        if user and check_password_hash(user.password_hash, password):
            login_user(user)
            return f'Welcome, {user.username}! You are now logged in.'

    return render_template('login.html', form=form)

def logout():
    logout_user()
    return 'You are now logged out.'

@login_required
def profile():
    return f'Welcome, {current_user.username}! This is your profile.'

def signup():
    form = SignupForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        # Check if the username is already taken
        if User.query.filter_by(username=username).first():
            return 'Username already taken. Please choose another username.'

        # Create a new user
        new_user = User(username=username, password_hash=generate_password_hash(password))
        db.session.add(new_user)
        db.session.commit()

        return 'Signup successful. You can now log in.'

    return render_template('signup.html', form=form)
