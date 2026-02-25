# Shield X - AI-Powered Fraud Detection

Shield X (also known as Cybersecurity X) is a modern web application designed to protect users from online scams using AI-driven analysis. It detects fraud patterns in SMS, links, and messages in real-time.

## 🚀 Features

- **Advanced AI Detection:** Scans text messages for high-risk keywords, suspicious links (HTTP vs HTTPS, shortened URLs), and OTP-related patterns.
- **Voice Scan:** Integrated Web Speech API allows users to perform hands-free scam detection through voice commands.
- **Screenshot Upload:** Support for uploading screenshots of suspicious messages for analysis.
- **Real-time Risk Scoring:** Provides an AI-generated risk score (0-100%) and categorizes threats as Low, Medium, or High risk.
- **Scan History:** Automatically saves your scan results locally so you can review them later.
- **Analytics Dashboard:** Visualize your security health with risk distribution charts and scan statistics.
- **Modern UI:** A sleek, responsive interface built with modern CSS techniques including glassmorphism and dark mode aesthetics.

## 🛠️ Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **APIs:** Web Speech API
- **Storage:** Browser LocalStorage (for scan history)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "shield x/Project"
   ```

2. **Set up a virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install flask flask-cors
   ```

## 🚦 Usage

1. **Start the Flask server:**
   ```bash
   python app.py
   ```

2. **Access the application:**
   Open your browser and navigate to `http://127.0.0.1:5000`

3. **Perform a Scan:**
   - Navigate to the **Detection** page.
   - Paste a suspicious message or use the **Voice Scan** feature.
   - Click **Run AI Scan** to see the results.

## 📂 Project Structure

- `app.py`: Main Flask application and routing.
- `templates/`: HTML templates for the UI.
- `static/`:
    - `css/`: Stylesheets for different modules.
    - `js/`: Frontend logic for analytics, history, and detection.

## 🛡️ Privacy Note
The demo mode does not collect personal data. Scan history is stored locally in your browser's storage and is not transmitted to any external server.

---
Developed for Cybersecurity Awareness and Protection.
