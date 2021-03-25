from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def index():
    return {
        "name": "Hellow World"
    }

if __name__=='__main__':
    app.run(debug=True)