import React, { useState } from 'react';
import Submit from '../components/buttons/Submit';
import Cancel from '../components/buttons/Cancel';

function AnswerQuestion() {
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
    <div className='container335'>
      <div>
        <p className='text33'>How do you feel today?</p>
        <br></br>
        <br></br>
        <br></br>
        <input
          type='text'
          className='input33'
          placeholder='Answer with one word...'
          value={answer}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="buttons445">
        {/* Pass the event handlers to the custom components */}
        <Cancel onClick={handleCancel} />
        <Submit onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default AnswerQuestion;
