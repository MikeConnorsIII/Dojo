from flask import Flask, render_template, request, session, redirect  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'its a secret'

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    # Return the string 'Hello World!' as a response
    return render_template("index.html")

@app.route('/process', methods=['POST'])          # The "@" decorator associates this route with the function immediately following
def process_form():
# Return the string 'Hello World!' as a response
    print("Got form information")
    session['name'] = request.form['name']
    session['locations'] = request.form['locations']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    return redirect("/result")

@app.route('/result')
def show_info():
    if not 'name' in session:
        session['name'] = "Not Provided"
    if not 'comments' in session:
        session['comments'] = "Not Provided"
    return render_template("results.html")


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port=5001)    # Run the app in debug mode.

