from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.dojos import Dojo
from flask_app.models.ninjas import Ninja

@app.route('/dojos')
def home():
    all_dojos = Dojo.get_all()
    return render_template("dojos.html", all_dojos = all_dojos)

@app.route("/dojos/create", methods = ["POST"])
def create():
    Dojo.create(request.form)
    return redirect('/dojos')

@app.route('/dojos/show/<int:id>') #this will show us the page of the Dojo
def show(id):
    data = {'id':id}
    one_dojo = Dojo.get1(data)
    return render_template("ninjasindojos.html", one_dojo = one_dojo)

