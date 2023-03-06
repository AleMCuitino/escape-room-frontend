import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { sendMessage } from '../../services/chat.service';
import ChatIcon from '@/assets/icons/messaging.png'
import { CssChatProvider } from './chat-styled'

function Chat() {

  //mostrar un mensaje del chat
  const [chatHistory, setChatHistory] = useState([]);
    
  //limpiar el input al enviar una mensaje del chat
  const [inputChat , setInputChat ] = useState("");

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
    setInputChat(event.target.value);
    setMessage(event.target.value);
  };

  const handleSend = async formData => {
    const { data } = await sendMessage(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      message: message,
    };
    handleSend(formData);

    //limpiar el input del chat
    setInputChat("");

  };

  return (
    <CssChatProvider className='col-12 col-md-6'>
      <div className='d-flex align-items-center mb-3'>
        <img src={ChatIcon} alt="chat" className='d-none d-md-block img-fluid me-4'/>
        <div className='chat-window'>
            {chatHistory.map((item, index) => {
              return (
                
                  <small className='mb-0 d-block' key={index}>
                    <strong className='me-2'>{item.user}:</strong>{item.message}
                  </small>
              
              );
            })}
          </div>
      </div>

      <form onSubmit={handleSubmit} className='d-flex'>
        
        <input
        value={inputChat}  
        className="flex-fill"
        type="text"
        inputmode="text"
        placeholder="Message"
        onChange={handleMessage} />
        
      </form>
    </CssChatProvider>
  );
}

export default Chat;