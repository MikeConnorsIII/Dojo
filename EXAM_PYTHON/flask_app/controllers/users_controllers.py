from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.sighting_model import Sighting

bcrypt = Bcrypt(app)

@app.route('/')
def register():
    if 'user_id' in session:
        return redirect('/users/dashboard')
    return render_template("login.html")

@app.route('/users/register', methods = ["POST"])
def create():
    if not User.validate_user(request.form):
        return redirect('/')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        **request.form,
        "password" : pw_hash,
        "conf_pass" : pw_hash
    }
    print(request.form['password'])
    user_id = User.create(data)
    session['user_id'] = user_id #this is where 

    User.create(request.form)
    return redirect('/')

@app.route('/users/login', methods=['post'])
def login():
    # see if the username provided exists in the database
    user_in_db = User.get_email(request.form)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid credentials", "log")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid credentials", "log")
        return redirect('/')
    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    # never render on a post!!!
    return redirect("/users/dashboard")

@app.route('/users/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id' : session['user_id']
    }
    logged_user = User.get1(data)
    all_sightings = Sighting.get_all()
    return render_template("dashboard.html", logged_user = logged_user, all_sightings = all_sightings)

@app.route('/users/logout')
def logout():
    del session['user_id']
    return redirect('/')


@app.route('/users/new')
def transfer():
    return render_template("create.html")

@app.route("/users/create", methods = ["POST"])
def create1():

    if not User.validate_user(request.form):
        return redirect('/')

    user_id = User.create(request.form)
    return redirect(f'/users/show/{user_id}')








