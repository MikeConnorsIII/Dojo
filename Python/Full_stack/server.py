from flask import Flask, render_template, request
# import the class from friend.py
from dog_model import Dog




#full crud routing
#/table_name/id/action
app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    all_dogs = Dog.get_all()
    return render_template("index.html", all_dogs = all_dogs)

@app.route('/dogs/<int:id>/view')
def get_one(id):
    data = {
        'id':id
    }
    one_dog = Dog.get_one(data)
    return

@app.route("/dogs/new")
def new_dog_form():
    # call the get all classmethod to get all friends
    all_dogs = Dog.get_all()
    return render_template("index.html", all_dogs = all_dogs)

@app.route("/dogs/create")
def create_dog():
    # call the get all classmethod to get all friends
    Dog.create(request.form)
    return redirect('/')

@app.route("/dogs/<int:id>/edit")
def edit_dog(id):
    this_dog = Dog.get_one({'id':id})
    return 

if __name__ == "__main__":
    app.run(debug=True)