import React from 'react';
import { FaSmileBeam } from 'react-icons/fa'
import './styles.css';

function ChatBot() {
  const messages = [
    'Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.',
    'Que satisfação, <nome>. Agora que sei seu nome, qual a cidade e estado que você mora?',
    'Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?',
    'Agora me fala teu e-mail, por gentileza.',
    'Você finalizou o teste. Fça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!'
    ];
  return (
    <body className="chatContainer">
      <ul>
      { messages.map((message) => (
        <div className="messageContainer">
          <div className="iconContainer">
            <FaSmileBeam color="#fff" size={35}/>
          </div>
          <li className="receptor">
          <div>{message}</div>
          </li>
        </div>
      ))}
      </ul>
    </body>
  );
}

export default ChatBot;
