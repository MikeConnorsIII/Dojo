from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.dojos import Dojo
from flask_app.models.ninjas import Ninja

@app.route('/ninjas')
def transfer():
    all_dojos = Dojo.get_all()
    return render_template("ninjas.html", all_dojos = all_dojos)

@app.route('/ninjas/create', methods=['post'])
def create_ninja():
    Ninja.create(request.form)
    return redirect(f'/dojos/show/{request.form["dojos_id"]}')
