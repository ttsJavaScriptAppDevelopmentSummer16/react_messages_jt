import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './skeleton.css';

class messagesApp extends Component {

  constructor () {
    
    super();
    this.state = {
         messages: [
          {text: 'I am the first message', time: '10:00am', user: 'Jordan'},
          {text: 'I am the second message', time: '12:00pm', user: 'Kobe'},
          {text: 'I am the third message', time: '2:00pm', user: 'Lebron'},
          {text: 'I am the third message', time: '2:00pm', user: 'Lebron'}
        ]
    }
  }

  render() {
    let currentUser = 'Kobe';
    let messages = this.state.messages.map(function (message, i) {
    let classes = 'message';
       if (message.user === currentUser) {
        classes += ' currentUser';
       }
      return (
          <p className={classes} key={i}> Here is the body of the message {message.text} <br />  The message was posted at {message.time} <br />  The user who posted this message was {message.user} .</p>
        )
    });

 



    return (
      <div className='container'>
        <label htmlFor='messageInput'>Message Input</label>
        <input type='text' name='messageInput' id='messageInput'/><br />
        <button className='primary'>Send</button>
        <p><u>Message List</u></p>
        <div>{messages}</div>
         {(function () {
            if (messages.length > 3) {
              return (<button>Show More Messages</button>)
            }
          })()}
      </div>

    );
  }
}

export default messagesApp
