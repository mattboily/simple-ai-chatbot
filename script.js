document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // IMPORTANT: Replace with your actual Groq API Key
    const GROQ_API_KEY = 'YOUR_GROQ_API_KEY';
    const GROQ_API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
    const GROQ_MODEL = 'llama3-8b-8192'; // Or 'mixtral-8x7b-32768', 'gemma-7b-it'

    let messages = [
        { role: "system", content: "You are a helpful AI assistant. Keep responses concise and to the point." }
    ];

    // Function to append a message to the chat display
    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = `<div class="message-bubble">${text}</div>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    // Function to send message to Groq API
    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return; // Don't send empty messages

        appendMessage('user', userMessage);
        messages.push({ role: "user", content: userMessage });
        userInput.value = ''; // Clear input field
        sendButton.disabled = true; // Disable button while AI is thinking

        // Append a "thinking" message from AI
        const thinkingMessageElement = document.createElement('div');
        thinkingMessageElement.classList.add('message', 'ai');
        thinkingMessageElement.innerHTML = `<div class="message-bubble">...</div>`;
        chatMessages.appendChild(thinkingMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch(GROQ_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    messages: messages,
                    model: GROQ_MODEL,
                    max_tokens: 150, // Limit response length
                    temperature: 0.7 // Creativity level
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Groq API error: ${response.status} - ${errorData.message || response.statusText}`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            // Update the thinking message with the actual AI response
            thinkingMessageElement.querySelector('.message-bubble').textContent = aiResponse;
            messages.push({ role: "assistant", content: aiResponse });

        } catch (error) {
            console.error('Error fetching from Groq API:', error);
            // Update thinking message with error
            thinkingMessageElement.querySelector('.message-bubble').textContent = `Error: ${error.message || 'Could not get response.'}`;
        } finally {
            sendButton.disabled = false; // Re-enable button
            chatMessages.scrollTop = chatMessages.scrollHeight; // Ensure scroll
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});