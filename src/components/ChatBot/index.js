import React from 'react';
import { FaSmileBeam } from 'react-icons/fa';
import './styles.css';

function ChatBot() {
  const allMessages = [
    {
      id: 0,
      message:
        'Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.',
    },
    {
      id: 1,
      message:
        'Que satisfação, <nome>. Agora que sei seu nome, qual a cidade e estado que você mora?',
    },
    {
      id: 2,
      message:
        'Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?',
    },
    { id: 3, message: 'Agora me fala teu e-mail, por gentileza.' },
    {
      id: 4,
      message:
        'Você finalizou o teste. Fça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!',
    },
  ];
  return (
    <body className="chatContainer">
      <ul>
        {allMessages.map((value) => (
          <div className="messageContainer" key={`${value.id}`}>
            <div className="iconContainer">
              <FaSmileBeam color="#fff" size={35} />
            </div>
            <li className="receptor">
              <div>{value.message}</div>
            </li>
          </div>
        ))}
      </ul>
    </body>
  );
}

export default ChatBot;
