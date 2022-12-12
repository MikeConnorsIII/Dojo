from flask import Flask, render_template, request, redirect
from flask_app import app
from flask_app.models.user_model import User

@app.route('/users/new')
def transfer():
    return render_template("create.html")

@app.route("/users/create", methods = ["POST"])
def create():
    user_id = User.create(request.form)
    return redirect(f'/users/show/{user_id}')

@app.route('/users/show/<int:id>') #this will show us the page of the user
def show(id):
    data = {'id':id}
    this_user = User.get1(data)
    return render_template("show.html", this_user = this_user)

@app.route('/users/show/<int:id>/edit') #this will take us to the edit page
def transfer3(id):
    data = {'id':id}
    this_user = User.get1(data)
    return render_template("edit.html", this_user = this_user)
#this will render the edit
@app.route('/users/show/<int:id>/edit/update', methods = ['POST'])
def transfer4(id):
    print(id)
    data = {'id':id,
    **request.form 
    }
    User.edit(data)
    print(data)
    return redirect(f'/users/show/{id}')

@app.route('/users/show/<int:id>/delete')
def delete(id):
    data = {'id':id}
    User.delete(data)
    return redirect("/users")

@app.route('/')
@app.route("/users")
def index():
    all_users = User.get_all()
    return render_template("all.html", all_users = all_users)



    