from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user_model import User
from flask_app.models.recipe_model import Recipe

@app.route('/recipes/new')
def recipe_new():
    
    # if 'user_id' in session:
    #     return redirect('/dashboard')
    return render_template("create.html")

@app.route('/recipes/create', methods=['POST'])
def recipe_create():
        if 'user_id' not in session:
            return redirect('/')
        if not Recipe.validator(request.form):
            return redirect('/recipes/new')
        data = {
            **request.form,
            "user_id" : session['user_id']
        }
        Recipe.create(data)
        print(request.form)
        return redirect("/users/dashboard")

@app.route('/recipes/<int:id>/view')
def recipe_view(id):
    # redirect if not in session later
    if 'user_id' not in session:
            return redirect('/')
    recipe_data = {'id':id} 
    user_data = {'id':session['user_id']}
    logged_user = User.get1(user_data)
    this_recipe = Recipe.get1(recipe_data)
    return render_template("recipe.html", this_recipe = this_recipe, logged_user = logged_user)

@app.route('/recipes/<int:id>/edit')
def recipe_edit(id):
    if 'user_id' not in session:
            return redirect('/')
    this_recipe = Recipe.get1({'id':id})
    return render_template("edit.html", this_recipe = this_recipe)


@app.route('/recipes/<int:id>/update', methods=['POST'])
def recipe_update(id):
    if 'user_id' not in session:
        return redirect('/')
    if not Recipe.validator(request.form):
        return redirect(f'/recipes/{id}/edit')
    data = {
        **request.form,
        'id' : id,
        'user_id': session['user_id']
    }
    Recipe.edit(data)

    
    return redirect("/users/dashboard")

@app.route('/recipes/<int:id>/delete')
def recipe_delete(id):
    if 'user_id' not in session:
            return redirect('/')
    Recipe.delete({'id':id})
    # if 'user_id' in session:
    #     return redirect('/dashboard')
    return redirect("/users/dashboard")
