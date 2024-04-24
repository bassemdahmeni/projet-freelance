
import React, { useState } from 'react'
import './Poll.css'
import icon10 from '../assets/icon10.png'
import Create from '../components/buttons/Create'
import Cancel from '../components/buttons/Cancel'
import { Link } from 'react-router-dom'

function Poll() {
    
        const [answer2, setAnswer2] = useState();
        const [answer3, setAnswer3] = useState();
        const [answer4, setAnswer4] = useState();

        const handleInputChange1 = (e) => {
            setAnswer2(e.target.value);
        };
        const handleInputChange2 = (e) => {
            setAnswer3(e.target.value);
        };
        const handleInputChange3 = (e) => {
            setAnswer4(e.target.value);
        };

        

        const handleCancel = () => {
            setAnswer2(''); // Clear the input field
            setAnswer3('');
            setAnswer4('');
           
        };


        const [options, setOptions] = useState([
            { id: 1, placeholder: 'option2' }
        ]);

        const addOption = () => {
            // Generate the next option ID and placeholder
            const nextId = options.length + 2;
            const nextPlaceholder = `option${nextId}`;
            // Add the new option to the state
            setOptions(options => [...options, { id: nextId, placeholder: nextPlaceholder }]);
        };
        const DeleteOption = () => {
            if (options.length > 1) {  // Ensures at least the first input remains
                setOptions(options => options.slice(0, -1));
            }
        }


        return (
            <div className='container33'>
                <div>
                    <p className='text33'>What do you want to know </p>
                    <input type='text' className='input33' placeholder='Enter your question here...' value={answer2}  onChange={handleInputChange1}></input>
                </div>
                <br></br>
                <div>
                    <p className='text332'>Poll Answers</p>
                    <div className='litcont33'>
                        <input type='text' className='input332' placeholder='option1' value={answer3}  onChange={handleInputChange2}></input>
                        <img src={icon10} className='image33' onClick={DeleteOption}></img>
                    </div>
                    <br></br>
                    {options.map(option => (
                        <div key={option.id} className='litcont33'>
                            <input type='text' className='input333' placeholder={`Eg. ${option.placeholder}`} value={answer4}  onChange={handleInputChange3}></input>
                            <img src={icon10} className='image33' onClick={DeleteOption}></img>
                        </div>
                    ))}
                    <br></br>
                </div>
                <button className='button33' onClick={addOption}>Add</button>
                <br></br>
                <br></br>

                <div>
                    <p className='text33'>Add Participants</p>
                </div>

                <div class="dropdown">
                    <select>
                        <option value="user_list">Select From User List</option>

                    </select>
                </div>
                <div class="buttons">

                    <Cancel onClick={handleCancel}></Cancel>
                    <Link to='/AnswerPoll' style={{ textDecoration: "none" }}><Create ></Create></Link>
                </div>
            </div>

        )
    }

    export default Poll
