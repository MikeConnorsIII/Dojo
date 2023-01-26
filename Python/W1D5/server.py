from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secretkey = "no secret on github"
# request gives acess to form

@app.route('/')
def Hello_world():
    return render_template("index.html")	# notice the 2 new named arguments!

@app.route('/form')
def display_form():
    return render_template("form.html")	# notice the 2 new named arguments!

@app.route('/process', methods=['POST']) #action
def process():
    print(request.form)
    # return render_template("display.html" name=request.form['name'] DO NOT DO THIS
    session['name'] = request.form['name']
    session['cuisine'] = request.form['cuisine']
    # held within the name not the id in html
    return redirect ('/display')

app.route('/display')
def display_results():
    if "name" in session:
        name = session['name']
    else:
        name = "Not "
    if not 'cuisine' in session:
        session['cuisine'] = "Not Provided"
    return render_template('display.html', name=name)

app.route('/reset') #action
def reset():
    # del session['name']
    session.clear()
    return redirect('/form')
    # dictionary commands work here


if __name__=="__main__":
    app.run(debug=True)

