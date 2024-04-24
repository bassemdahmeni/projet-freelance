import React from 'react'
import Create from '../components/buttons/Create'
import Cancel from '../components/buttons/Cancel'
import './Question.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Question() {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    console.log(answer);
    setAnswer('');
  };

  const handleCancel = () => {
    setAnswer(''); // Clear the input field
  };
  return (
   
  <div className='container33'>
    <div>
      <p className='text33'>What do you want to know </p>
      <input type='text' className='input33' placeholder='Enter your question here...' value={answer} onChange={handleInputChange}></input>
    </div>
    <br></br>
    <div>
      <p className='text33'>Add Participants</p>
    </div>
    <div class="dropdown">
      <select>
        <option value="user_list">Select From User List</option>

      </select>
    </div>
    <div class="buttons2">

      <Cancel onClick={handleCancel}></Cancel>
      <Link to='/AnswerQuestion' style={{ textDecoration: "none" }}><Create></Create></Link>
    </div>
  </div>
  )
}

export default Question