from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ==========================
# MAIN ROUTES
# ==========================

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/scan-history")
def scan_history():
    return render_template("scan-history.html")

@app.route("/detection")
def detection():
    return render_template("detection.html")


@app.route("/history")
def history():
    return render_template("history.html")


@app.route("/analytics")
def analytics():
    return render_template("analytics.html")


# ==========================
# RUN SERVER
# ==========================

if __name__ == "__main__":
    app.run(debug=True)