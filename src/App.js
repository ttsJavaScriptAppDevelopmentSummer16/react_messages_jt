import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

class messageList extends Component {

}

class messagesApp extends Component {

  constructor () {
    
    super();
    this.state = {
         messages: [
          {text: 'I am the first message', time: '10:00am', user: 'Jordan'},
          {text: 'I am the second message', time: '12:00pm', user: 'Kobe'},
          {text: 'I am the third message', time: '2:00pm', user: 'Lebron'},
          {text: 'I am the third message', time: '2:00pm', user: 'Lebron'}
        ],
        newMessage: null,
        editMessage: false
    }
  }

  _handleMessage = (message) => {
    const currentUser = 'Kobe';
    console.log({message});
    const classes = message.user === currentUser ? 'message currentUser' : 'message';
     if (message.user === currentUser) {
        return (
          <p className={classes}> Hey I'm message #. Here is my contents: {message.text} <br/><button className='button-primary'>Edit Message</button></p>
        )
      }else {
        return (
          <p className={classes}> Hey I'm message #. Here is my contents: {message.text}</p>
        )
      }
  }

   _updateMessage = (e) => {
    this.setState({newMessage: e.target.value})
   }

   _editMessage = () => {
    this.setState({editMessage: true})
   }

  _addMessage = (e) => {
    e.preventDefault();
    const messageInput =  document.getElementById('messageInput')

    if (messageInput.value === '' || null) { 

      messageInput.classList.add('error')
      alert('Please Enter A Message')
    } else {

      messageInput.classList.remove('error')
      let messages = this.state.messages.slice()
      messages.push({text: this.state.newMessage})
      this.setState({messages})
      messageInput.value = null
  }
}

  render() {

    return (
      <div className='container'>
        <form onSubmit={this._addMessage}>
        <label htmlFor='messageInput'>Message Input</label>
        <input type='text' name='messageInput' value={this.newMessage} onChange={this._updateMessage} id='messageInput'/><br />
        <button type="submit" className='primary'>Add Message</button>
        </form>
        <p><u>Message List</u></p>
        {this.state.messages.map( (message) => {
         return this._handleMessage(message);
        })}

         
      </div>

    );
  }
}

export default messagesApp
