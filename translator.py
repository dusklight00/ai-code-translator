from hugchat import hugchat
from hugchat.login import Login
from dotenv import load_dotenv
import os
load_dotenv()

class Translator:
    def __init__(self):
        self.EMAIL = os.getenv("EMAIL")
        self.PASSWORD = os.getenv("PASSWORD")
        self.COOKIE_PATH_DIR = "./cookies/" 
        self.chatbot = self._login()

    def _login(self):
        sign = Login(self.EMAIL, self.PASSWORD)
        cookies = sign.login(cookie_dir_path=self.COOKIE_PATH_DIR, save_cookies=True)
        chatbot = hugchat.ChatBot(cookies=cookies.get_dict())
        return chatbot

    def _remove_code_notation(self, code):
        lines = code.split("\n")
        first_line_removed = "\n".join(lines[1:])
        remove_last_line_quotes = first_line_removed.replace("```", "")
        return remove_last_line_quotes


    def translate(self, code, language):
        query = self.chatbot.chat(code + f"\n\ntranslate the code to {language}")
        response = query.wait_until_done()
        return self._remove_code_notation(response)