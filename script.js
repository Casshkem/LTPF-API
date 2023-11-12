const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const userMessage = messageInput.value;
    if (!userMessage) return;

    displayMessage(userMessage, 'user');

    // Replace 'YOUR_API_KEY' with your actual ChatGPT API key
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: userMessage }],
        })
    })
    .then(response => response.json())
    .then(data => {
        const chatResponse = data.choices[0].message.content;
        displayMessage(chatResponse, 'assistant');
    })
    .catch(error => console.error('Error:', error));

    messageInput.value = '';
}

function displayMessage(message, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = role;
    messageDiv.textContent = message;
    chatOutput.appendChild(messageDiv);
}
