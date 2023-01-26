from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.sighting_model import Sighting

@app.route('/sightings/new')
def sighting_new():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("create.html")

@app.route('/sightings/create', methods=['POST'])
def sighting_create():
        if 'user_id' not in session:
            return redirect('/')
        if not Sighting.validator(request.form):
            return redirect('/sightings/new')
        data = {
            **request.form,
            "user_id" : session['user_id']
        }
        Sighting.create(data)
        print(request.form)
        return redirect("/users/dashboard")

@app.route('/sightings/<int:id>/view')
def sighting_view(id):
    # redirect if not in session later
    if 'user_id' not in session:
            return redirect('/')
    sighting_data = {'id':id} 
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    this_sighting = Sighting.get1(sighting_data)
    
    return render_template("sighting.html", this_sighting = this_sighting, logged_user = logged_user)

@app.route('/sightings/<int:id>/edit')
def sighting_edit(id):
    if 'user_id' not in session:
            return redirect('/')
    this_sighting = Sighting.get1({'id':id})
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    return render_template("edit.html", this_sighting = this_sighting, logged_user = logged_user)


@app.route('/sightings/<int:id>/update', methods=['POST'])
def sighting_update(id):
    if 'user_id' not in session:
        return redirect('/')
    if not Sighting.validator(request.form):
        return redirect(f'/sightings/{id}/edit')
    data = {
        **request.form,
        'id' : id,
        'user_id': session['user_id']
    }
    Sighting.edit(data)

    
    return redirect("/users/dashboard")

@app.route('/sightings/<int:id>/delete')
def sighting_delete(id):
    if 'user_id' not in session:
            return redirect('/')
    Sighting.delete({'id':id})
    # if 'user_id' in session:
    #     return redirect('/dashboard')
    return redirect("/users/dashboard")

@app.route('sightings/<int:id>/skeptical')
def sighting_skeptical():
    all_sightings = Sighting.get_all()
    