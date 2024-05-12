# AI Code Translator

A simple react web app made with Vite and Chakra UI that translates code from one language to another using Sequence to Sequence Transformer model. The model is trained on a dataset of 2 million code snippets from 9 different programming languages. The model is trained using the Hugging Face's transformers library and the code is written in PyTorch.

To install the required **dependencies**, use the command

```bash
pip install -r requirements.txt
```

Once all the dependencies are installed, use this command to run the **backend server**

```bash
python main.py
```

Use the command to install all the **frontned dependencies**

```bash
cd view
npm install
```

Then use this command to run the **frontend**

```bash
npm run dev
```

## Working Demo

![Screen Record](demo.gif)
