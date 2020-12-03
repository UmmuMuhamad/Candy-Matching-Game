from flask import Flask
application = Flask('myApp')

@application.route('/')
def index():
    return "hello world"

if __name__ == '__main__':
    application.run(debug=False)