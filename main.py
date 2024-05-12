from hugchat import hugchat
from hugchat.login import Login
from dotenv import load_dotenv
import os
load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")

# Log in to huggingface and grant authorization to huggingchat
# EMAIL = "r.rahul.developer@gmail.com"
# PASSWORD = "Zumbido123@toss"
cookie_path_dir = "./cookies/" # NOTE: trailing slash (/) is required to avoid errors
sign = Login(EMAIL, PASSWORD)
cookies = sign.login(cookie_dir_path=cookie_path_dir, save_cookies=True)

# Create your ChatBot
chatbot = hugchat.ChatBot(cookies=cookies.get_dict())  # or cookie_path="usercookies/<email>.json"

# Non stream response
query_result = chatbot.chat("""
def wow():
    if(5 > 4):
        print("wow")
wow()

translate the code to php
""")
print(query_result) # or query_result.text or query_result["text"]