from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'keep it secret. keep it safe'
# our index route will handle rendering our form
@app.route('/')
def index():
    if 'visits' in session:
        session['visits'] += 1
    else:
        session['visits'] = 1
    print(session['visits'])
    return render_template("index.html", visits=session['visits'])

@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)

if 'key_name' in session:
    print('key exists!')
else:
    print("key 'key_name' does NOT exist")

