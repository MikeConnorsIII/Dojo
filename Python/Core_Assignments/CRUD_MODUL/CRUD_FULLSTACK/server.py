from flask_app import app
from flask_app.controllers import users_controllers
# import the class from friend.py


if __name__ == "__main__":
    app.run(debug=True)