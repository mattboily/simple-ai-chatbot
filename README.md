# Simple AI Chatbot

A basic web-based chatbot powered by Groq's fast Large Language Models (LLMs). This project demonstrates how to integrate a modern LLM API into a simple client-side application using HTML, CSS, and JavaScript.

## Features

*   Interactive chat interface.
*   Sends user messages to the Groq API and displays AI responses.
*   Maintains basic conversation context.
*   Fast AI responses thanks to Groq's LPU architecture.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+, Async/Await, Fetch API)
*   [Groq Cloud API](https://groq.com/cloud) (using models like Llama 3 8B)

## How to Run Locally

1.  **Get a Groq API Key:**
    *   Go to [https://groq.com/cloud](https://groq.com/cloud) and sign up/log in.
    *   Navigate to the "API Keys" section and generate a new API key. **Copy it immediately!**
2.  **Clone this repository:** `git clone https://github.com/YOURUSERNAME/simple-ai-chatbot.git`
3.  **Navigate to the project directory:** `cd simple-ai-chatbot`
4.  **Insert your API Key:** Open `script.js` in a text editor and replace `'YOUR_GROQ_API_KEY'` with the actual API key you obtained from Groq Cloud.
5.  **Open `index.html`** in your web browser.

## Live Demo (Requires User API Key)

Due to the sensitive nature of API keys, a live demo on GitHub Pages for a purely client-side application would require exposing the key. To try the live demo, you would need to visit the GitHub Pages link below, then open the browser's developer console, go to the `Sources` tab, find `script.js`, and manually edit the `GROQ_API_KEY` variable with your own key for the session.

Alternatively, follow the "How to Run Locally" steps to set up and run the chatbot with your own key.

[https://YOURUSERNAME.github.io/simple-ai-chatbot/](https://YOURUSERNAME.github.io/simple-ai-chatbot/)

## Learnings

This project provided hands-on experience with:
*   Integrating with a powerful Large Language Model (LLM) API.
*   Handling API authentication with bearer tokens.
*   Managing conversation state and context for an AI.
*   Asynchronous JavaScript programming (`async/await`).
*   Basic UI/UX for a chat application.
*   **Understanding API key security considerations for client-side applications.**
