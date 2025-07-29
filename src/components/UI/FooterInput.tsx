"use client";
import React, { useState } from 'react';
import '../UI/button.css';

export default function FooterInput({title, mail, messages, button, pl1, pl2, ...props}: any) {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        last,
        email,
        message
      }),
    });

    if (!response.ok) {
      alert('Somthing went wrong, please try again!')
      console.error(`Ошибка запроса: ${response.status}`);
    } else {
      alert('Message sent successfully!');
    }

    setName('');
    setLast('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={sendMail}>
      <div>
        <div style={{display: "flex", width: "48%"}}>
          <label style={{color: "#fff"}} className='footer_containers_text' htmlFor='name'>
            {title}
          </label>
          <label htmlFor='last'></label>
        </div>
        <div style={{display: "flex", gap: "3%"}}>
          <div>
            <div style={{ border: "1px solid #fff1b5"}}>
              <input
                type='text'
                id='name'
                placeholder={pl1}
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                className='footer_input_field'
              />
            </div>
          </div>
          <div style={{ border: "1px solid #fff1b5" }}>
            <input
              type='text'
              id='last'
              placeholder={pl2}
              required
              value={last}
              onChange={(e) => {
                setLast(e.target.value)
              }}
              className='footer_input_field'
            />
          </div>
        </div>
      </div>
      <div>
        <label style={{color: "#fff"}} className='footer_containers_text' htmlFor='email'>
          {mail}
        </label>
        <div style={{ border: "1px solid #fff1b5" }}>
          <input
            type='email'
            id='email'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            style={{ width: "100%"}}
          />
        </div>
      </div>
      <div>
        <label style={{color: "#fff"}} className='footer_containers_text' htmlFor='message'>
          {messages}
        </label>
        <div >
          <textarea
            rows={5}
            name='message'
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div >
        <button
          type='submit'
          style={{marginTop: "5%", marginBottom: "5%"}}
          className='myButton '
        >
          {button}
        </button>
      </div>
    </form>
  )
};
