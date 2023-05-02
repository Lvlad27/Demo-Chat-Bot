# Chatbot Project

This is a simple chatbot project prototype built using Node.js, Express, WebSockets (ws library), and Nginx. The project was created for learning purposes.

Check it out at [lvlad.dev](https://lvlad.dev)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- Real-time communication between clients and server using WebSockets
- Nginx for SSL/TLS termination and proxying WebSocket connections
- Node.js and Express for backend server
- Frontend with HTML, CSS, and JavaScript

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/chatbot.git
```

2. Change into the project directory

```bash
cd chatbot
```

3. Install the required dependencies

```bash
npm install
```

4. Make sure you have Nginx configured with SSL/TLS certificates and the WebSocket proxy configuration.

5. Start the server using PM2 or another process manager:

```bash
pm2 start app.js
```

## Usage

1. Open your browser and navigate to your domain (e.g., https://yourdomain.com).
2. Start chatting with the chatbot by typing your message and pressing the Enter key.
3. The chatbot will respond in real-time.

## License

This project is for learning purposes only. Feel free to use, modify, or distribute the code as needed.
