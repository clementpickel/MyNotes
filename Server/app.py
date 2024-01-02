from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flasgger import Swagger
from flask_cors import CORS


app = Flask(__name__)
app.config.from_pyfile('config.py')

CORS(app)

swagger = Swagger(app)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
