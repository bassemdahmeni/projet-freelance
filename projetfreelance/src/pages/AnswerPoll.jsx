import React, { useState } from 'react'
import Submit from '../components/buttons/Submit'
import Cancel from '../components/buttons/Cancel'

function AnswerPoll() {
    const [selected, setSelected] = useState('');

    const handleSelect = (choice) => {
        setSelected(choice);
    };

    const handleSubmit = () => {
        if (selected) {
            console.log(`${selected} submitted`);
            // If you need to do something after submitting, you can add it here
        } else {
            console.log('No option selected');
        }
    };
    return (
        <div className='container44'>
            <div className='Cont44'>
                <p className='text33'>Which is better, Ice cream or juice?</p>
                <p className='text44'>Select an answer from below and submit it</p>
            </div>
            <br />
            <div className='contBox44'>
                <div
                    className={`Box44 ${selected === 'Ice Cream' ? 'selected' : ''}`}
                    onClick={() => handleSelect('Ice Cream')}
                >
                    Ice Cream
                </div>
                <div
                    className={`Box44 ${selected === 'Juice' ? 'selected' : ''}`}
                    onClick={() => handleSelect('Juice')}
                >
                    Juice
                </div>
                <div className="buttons44">
                    <Submit onClick={handleSubmit}></Submit>
                    
                    <Cancel onClick={() => setSelected('')}></Cancel>
                </div>
            </div>
        </div>
    )
}

export default AnswerPoll