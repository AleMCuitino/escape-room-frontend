import React, { useState, useEffect, useContext } from 'react';
import Pusher from 'pusher-js';
import { sendMessage } from '../../services/chat.service';
import ChatIcon from '@/assets/icons/messaging.png'
import { CssChatProvider } from './chat-styled'
import { UserContext } from '../../contexts/UserContext';
import { userUpdateParticiped } from '../../services/user.service';

function Chat({getUsers}) {



  const { userStorage, setUserStorage } = useContext(UserContext)
  const [chatHistory, setChatHistory] = useState([]);
  const [inputChat, setInputChat] = useState("");

  const userParticiped = async (id) => {
    const formData = {
      participed: true,
    };
    const { data } = await userUpdateParticiped(formData, id);
    console.log(data)
  };

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('a4b971091d67d3ac2bf1', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('my-channel');

    channel.bind('my-event', function (data) {
      if (data?.room == userStorage?.user?.room_id) {

        if (data.message == "READY") {
          getUsers()
          console.log(data)
          console.log("lanzaron el comando de activación")
        }
        setChatHistory(prevData => {
          // Filtrar los mensajes duplicados
          const messageSet = new Set(prevData.map(m => m?.message));
          if (messageSet.has(data.message)) {
            return prevData;
          }
          // Agregar el nuevo mensaje al final del array
          return [ { message: data.message, user: data.user }, ...prevData];
        });
      }
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
    if (message == "READY") {

      userParticiped(userStorage?.user?.id)
    }
    handleSend(formData);

    //limpiar el input del chat
    setInputChat("");

  };

  return (
    <CssChatProvider className='col-12 col-md-6'>
      <div className='d-flex align-items-center mb-3'>
        <img src={ChatIcon} alt="chat" className='d-none d-md-block img-fluid me-4' />
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
          placeholder="Message"
          onChange={handleMessage} />

      </form>
    </CssChatProvider>
  );
}

export default Chat;