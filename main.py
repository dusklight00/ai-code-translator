# from translator import Translator

# translator = Translator()

# code = """
# def wow():
#     if(5 > 4):
#         print("wow")
# wow()
# """

# language = "php"

# translated_code = translator.translate(code, language)

# print(translated_code)

from flask import Flask, request, jsonify
from translator import Translator

app = Flask(__name__)
translator = Translator()

@app.route("/translate", methods=["GET"])
def translate():
    code = request.args.get("code")
    language = request.args.get("language")
    translated_code = translator.translate(code, language)
    return jsonify({"translated_code": translated_code})

if __name__ == "__main__":
    app.run(debug=True)
