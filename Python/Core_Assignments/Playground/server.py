# from flask import Flask,render_template  # Import Flask to allow us to create our app
# app = Flask(__name__)    # Create a new instance of the Flask class called "app"

# @app.route('/')          # The "@" decorator associates this route with the function immediately following
# def hello_world():
#     return 'Hello World!'  # Return the string 'Hello World!' as a response


# if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
#     app.run(debug=True)    # Run the app in debug mode.

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def index():
    return render_template("index.html", x=3)	# default 3 circle

@app.route('/play/<int:x>') #how many circle
def play(x):
    return render_template("index.html", x=x)

@app.route('/play/<int:x>/<color>') #what flavor circle
def color(x, color):
    return render_template("index.html",x=x, color=color)

if __name__=="__main__":
    app.run(debug=True)