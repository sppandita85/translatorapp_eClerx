from flask import Flask, render_template, request, jsonify
from deep_translator import GoogleTranslator

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json(silent=True) or {}
    text = (data.get("text") or "").strip()

    if not text:
        return jsonify({"error": "Please enter an English sentence to translate."}), 400

    try:
        translated = GoogleTranslator(source="en", target="de").translate(text)
        return jsonify({"translation": translated})
    except Exception as exc:
        return jsonify({"error": f"Translation failed: {exc}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
