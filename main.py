from flask import Flask, request, jsonify
from flask_cors import CORS
from translator import Translator

app = Flask(__name__)
CORS(app)
translator = Translator()

@app.route("/translate", methods=["GET"])
def translate():
    code = request.args.get("code")
    language = request.args.get("language")
    translated_code = translator.translate(code, language)
    return jsonify({"translated_code": translated_code})

if __name__ == "__main__":
    app.run(debug=True)
