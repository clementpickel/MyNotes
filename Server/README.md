# MyNotes Server

## Docker Installation

1. Build the Docker image by running the following command in the project directory:

    ```bash
    docker build -t sekken/server:1.0 .
    ```

2. Run the Docker container with the following command:

    ```bash
    docker run -p 5000:5000 docker.io/sekken/server:1.0
    ```

## Documentation

Access the API documentation after launching the program: [http://localhost:5000/apidocs](http://localhost:5000/apidocs)

## Why Python Flask

I chose to use Python Flask for several reasons:

- **Code Simplicity:** Flask provides a simple and clean syntax that allows for rapid development.

- **Framework Simplicity:** Flask is known for its simplicity and lightweight nature. If your application is relatively small or you prefer more control over the components you use, Flask can be a better choice.

- **Modularity:** Flask is modular, allowing you to choose the extensions and libraries you need, making it flexible for different types of projects.

## Used Extensions

- **Flask-SQLAlchemy:** Simplifies the use of SQLite in the application.

- **Flask-Bcrypt:** Hashes passwords to enhance security.

- **Flask-JWT-Extended:** Uses tokens for authentication, ensuring secure user authentication.

## Manual Installation (Deprecated)

The following steps are no longer required when using Docker. They are kept for historical reference:

1. Open a command prompt in the project directory.

2. Install the necessary dependencies by running the following command:

    ```bash
    pip install Flask Flask-SQLAlchemy Flask-Bcrypt Flask-JWT-Extended
    ```

3. (OPTIONAL) Run `generate_key.py` to generate a key and update it in `config.py`:

    ```bash
    python tmp/generate_key.py
    ```

4. Run the Flask application with the command:

    ```bash
    python run.py
    ```
