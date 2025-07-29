"use client";
import React, { FormEvent, useState } from 'react'
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';

const InputForm = ({...props}: any) => {

  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [tour, setTour] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);

  const sendForm = async (e: FormEvent) => {
    console.log('Data', name, last, country, tour, number, email, message);
    e.preventDefault();

    const response = await fetch("/bookForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        last,
        country,
        tour,
        number,
        email,
        message
      }),
    });

    {/*Change it*/}
    if (response.ok) {
      alert('Booking form submitted successfully!'); {/*Please agree to the terms and conditions before submitting the form.*/}
    } else {
      alert("Something went wrong, please try again!")
    }

  setName('');
  setLast('');
  setCountry('');
  setTour('');
  setNumber('');
  setEmail('');
  setMessage('');
  };

  return (
    <div>
      <h2 className='contacts_form_header'>{props.formHeader}</h2>
      <form onSubmit={sendForm} className='contact_form'>
        <p style={{marginBottom: 0}}>{props.formTitle} <a style={{color: "red"}}>*</a></p>
        <div style={{ width: "100%", display: "flex", gap: "5%"}}>
          <Input
            type="text"
            id='name'
            placeholder={props.formPlaceholder1}
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            type="text"
            id='last'
            placeholder={props.formPlaceholder2}
            required
            value={last}
            onChange={(e) => {
              setLast(e.target.value)
            }}
          />
        </div>
        <p style={{marginBottom: 0}}>{props.mail} <a style={{color: "red"}}>*</a></p>
        <Input
          type="email"
          id='email'
          placeholder=""
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <div>
          <p style={{marginBottom: 0}}>{props.countryTitle}</p>
          <div>
            <select value={country} className='Input' onChange={(e) => setCountry(e.target.value)}>
              <option value="not selected">{props.choice}</option>
              <option value='South Korea'>{props.country1} </option>
              <option value='China'>{props.country2} </option>
              <option value='France'>{props.country3} </option>
              <option value='Germany'>{props.country4} </option>
              <option value='Hungary'>{props.country5} </option>
              <option value='India'>{props.country6} </option>
              <option value='Japan'>{props.country7} </option>
              <option value='Russia'>{props.country8} </option>
              <option value='Singapore'>{props.country9} </option>
              <option value='Canada'>{props.country10} </option>
              <option value='Taiwan'>{props.country11} </option>
              <option value='USA'>{props.country12} </option>
              <option value='Other'>{props.country13} </option>
            </select>
          </div>
          <p style={{marginBottom: 0}}>{props.tourTitle}</p>
          <div>
            <select value={tour} className='Input' onChange={(e) => setTour(e.target.value)}>
              <option value="not selected">{props.choice}</option>
              <option value='mask' disabled style={{color: 'rgba(0, 0, 0, 0.5)', fontWeight: "bolder", fontStyle: "italic"}}>{props.disabled_mask1} </option>
              <option value='city'>{props.choice1} </option>
              <option value='gobi'>{props.choice2} </option>
              <option value='central'>{props.choice3} </option>
              <option value='khuvsgul'>{props.choice4} </option>
              <option value='gobikhangai'>{props.choice5} </option>
              <option value='mask' disabled style={{color: 'rgba(0, 0, 0, 0.5)', fontWeight: "bolder", fontStyle: "italic"}}>{props.disabled_mask2} </option>
              <option value='horse'>{props.choice6} </option>
              <option value='altai'>{props.choice7} </option>
              <option value='tsaatan'>{props.choice8} </option>
            </select>
          </div>
          <p style={{marginBottom: 0}}>{props.numberTitle} <a style={{color: "red"}}>*</a></p>
          <Input
            type="number"
            id='number'
            placeholder=""
            required
            value={number}
            onChange={(e) => {
              const inputValue = parseInt(e.target.value);
              if (!isNaN(inputValue)) { 
                if (inputValue > 1) {
                  setNumber(inputValue.toString()); 
                } else {
                  setNumber("1");
                }
              }
            }}
          />
        </div>
        <p style={{marginBottom: 0}}>{props.messageTitle}</p>
        <TextArea
          id='message'
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        {/*<div>
          <label style={{ whiteSpace: 'nowrap' }}>
            <input
              type="checkbox"
              checked={agreeChecked}
              onChange={() => setAgreeChecked(!agreeChecked)}
              style={{ marginRight: '1%' }}
            />
            {props.agreeTitle}
          </label>
        </div>*/}
        <div style={{marginTop: "3%"}}>
          <Button type="Submit">{props.buttonTitle}</Button>
        </div>
      </form>
    </div>
  )
}

export default InputForm
