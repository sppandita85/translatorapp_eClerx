# eClerx Batch 2 Demo — English to German Translator

A simple web app that translates English sentences to German.

## Welcome
Welcoming all the participants from eClerx — let's make useful products in the next couple of weeks!

## Tech stack
- Backend: Python + Flask
- Translation: `deep-translator` (Google Translate)
- Frontend: HTML, CSS, vanilla JavaScript

## Run locally

```bash
pip install -r requirements.txt
python app.py
```

Then open http://localhost:5001 in your browser.

## How it works
1. Enter an English sentence in the textarea.
2. Click **Translate**.
3. The German translation appears below.

Tip: press `Ctrl+Enter` (or `Cmd+Enter` on macOS) inside the textarea to translate.

## Project structure
```
.
├── app.py              # Flask server + /translate endpoint
├── requirements.txt
├── templates/
│   └── index.html      # UI
├── static/
│   ├── style.css
│   └── script.js
└── README.md
```
