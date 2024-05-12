from translator import Translator

translator = Translator()

code = """
def wow():
    if(5 > 4):
        print("wow")
wow()
"""

language = "php"

translated_code = translator.translate(code, language)

print(translated_code)