from app import app, db
from routes import user_routes, note_routes

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    user_routes(app)
    note_routes(app)
    app.run(host="0.0.0.0", port=int("5000"), debug=True)
