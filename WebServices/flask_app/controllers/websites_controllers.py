from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.website_model import Website

@app.route('/websites/new')
def website_new():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("create.html")

@app.route('/websites/create', methods=['POST'])
def website_create():
        if 'user_id' not in session:
            return redirect('/')
        # if not Website.validator(request.form):
        #     return redirect('/websites/new')
        data = {
            **request.form,
            "user_id" : session['user_id']
        }
        Website.create(data)
        print(request.form)
        return redirect("/users/dashboard")

@app.route('/websites/<int:id>/view')
def website_view(id):
    # redirect if not in session later
    if 'user_id' not in session:
            return redirect('/')
    website_data = {'id':id} 
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    this_website = Website.get1(website_data)
    
    return render_template("website.html", this_website = this_website, logged_user = logged_user)

@app.route('/websites/<int:id>/edit')
def website_edit(id):
    if 'user_id' not in session:
            return redirect('/')
    this_website = Website.get1({'id':id})
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    return render_template("edit.html", this_website = this_website, logged_user = logged_user)


@app.route('/websites/<int:id>/update', methods=['POST'])
def website_update(id):
    if 'user_id' not in session:
        return redirect('/')
    # if not Website.validator(request.form):
    #     return redirect(f'/websites/{id}/edit') remember to come back when setting up the validator
    data = {
        **request.form,
        'id' : id,
        'user_id': session['user_id']
    }
    Website.edit(data)

    
    return redirect("/users/dashboard")

@app.route('/websites/<int:id>/delete')
def website_delete(id):
    if 'user_id' not in session:
            return redirect('/')
    Website.delete({'id':id})
    # if 'user_id' in session:
    #     return redirect('/dashboard')
    return redirect("/users/dashboard")

@app.route('/websites/<int:id>/order')
def website_order(id):
    if 'user_id' not in session:
            return redirect('/')
    this_website = Website.get1({'id':id})
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    return render_template("order.html", this_website = this_website, logged_user = logged_user)

# @app.route('websites/<int:id>/skeptical')
# def sighting_skeptical():
#     all_websites = Sighting.get_all()
    