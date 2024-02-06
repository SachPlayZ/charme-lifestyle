from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import DataRequired

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()], render_kw={"placeholder": "Username"})
    password = PasswordField('Password', validators=[DataRequired()], render_kw={"placeholder": "Password"})
    submit = SubmitField('Login')

class SignupForm(FlaskForm):
    name = StringField(label='Name', validators=[DataRequired()], render_kw={"placeholder": "Your Name"})
    username = StringField('Username', validators=[DataRequired()], render_kw={"placeholder": "Username"})    
    email = EmailField("Email Address", [DataRequired(), "Please enter a valid email address"])
    password = PasswordField('Password', validators=[DataRequired()], render_kw={"placeholder": "Password"})
    confirm_password = PasswordField('Confirm Password', [DataRequired(password), 'Passwords must match'], render_kw={"placeholder": "Confirm Password"})
    submit = SubmitField('Signup')
