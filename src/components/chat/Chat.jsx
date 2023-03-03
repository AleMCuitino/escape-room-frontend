import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { sendMessage } from '../../services/chat.service';

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('a4b971091d67d3ac2bf1', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      setChatHistory(prevData => {
        // Filtrar los mensajes duplicados
        const messageSet = new Set(prevData.map(m => m.message));
        if (messageSet.has(data.message)) {
          return prevData;
        }
        // Agregar el nuevo mensaje al final del array
        return [...prevData, { message: data.message, user: data.user }];
      });
    });
  }, []);

  const [message, setMessage] = useState('');

  const handleMessage = event => {
    setMessage(event.target.value);
  };

  const handleSend = async formData => {
    const { data } = await sendMessage(formData);
  };

  const handleSubmit = () => {
    const formData = {
      message: message,
    };
    handleSend(formData);
  };

  return (
    <div>
      <span>Icono de chat</span>
      <p>mensaje</p>
      {chatHistory.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.user}: {item.message}
            </p>
          </div>
        );
      })}
      <input type="text" placeholder="Message" onChange={handleMessage} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default Chat;