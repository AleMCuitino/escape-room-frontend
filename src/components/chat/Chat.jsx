import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { sendMessage } from '../../services/chat.service';
import ChatIcon from '@/assets/icons/messaging.png'
import { CssChatProvider } from './chat-styled'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      message: message,
    };
    handleSend(formData);
  };

  return (
    <CssChatProvider className='col-12 col-md-6'>
      <div className='d-flex align-items-center mb-3'>
        <img src={ChatIcon} alt="chat" className='d-none d-md-block img-fluid me-4'/>
        <div className='chat-window'>
        <small className='mb-0 d-block'><strong className='me-2'>Carla:</strong>mensaje largo larglo largo largo</small>
        <small className='mb-0 d-block'><strong className='me-2'>Carla:</strong>mensaje</small>
        <small className='mb-0 d-block'><strong className='me-2'>Carla:</strong>mensaje</small>
        <small className='mb-0 d-block'><strong className='me-2'>Carla:</strong>mensaje</small>
        <small className='mb-0 d-block'><strong className='me-2'>Carla:</strong>mensaje</small>
       
      

        </div>
        {chatHistory.map((item, index) => {
          return (
            
              <small className='mb-0 d-block' key={index}>
                <strong className='me-2'>{item.user}:</strong> {item.message}
              </small>
          
          );
        })}

      </div>

      <form onSubmit={handleSubmit} className='d-flex'>
        
        <input className="flex-fill" type="text"  inputmode="text" placeholder="Message" onChange={handleMessage} />
        
      </form>
    </CssChatProvider>
  );
}

export default Chat;