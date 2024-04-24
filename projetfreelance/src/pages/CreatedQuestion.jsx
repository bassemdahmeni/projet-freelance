import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Export from '../components/buttons/Export'
import Delete from '../components/buttons/Delete'


function CreatedQuestion() {
    const words = [
        { text: 'Cool', size: 24, color: 'blue', top: '20%', left: '10%', fontWeight: 300 },
        { text: 'Happy', size: 30, color: 'green', top: '10%', left: '50%', fontWeight: 800 },
        { text: 'okay', size: 20, color: 'red', top: '50%', left: '20%', fontWeight: 400 },
        { text: 'Tired', size: 22, color: 'blue', top: '40%', left: '70%', fontWeight: 700 },
        { text: 'relaxed', size: 26, color: 'green', top: '70%', left: '30%', fontWeight: 600 },
        { text: 'Busy', size: 18, color: 'blue', top: '80%', left: '60%', fontWeight: 900 },
        { text: 'fine', size: 16, color: 'red', top: '60%', left: '10%', fontWeight: 500 },
        { text: 'good', size: 28, color: 'green', top: '30%', left: '80%', fontWeight: 300 },
    ];
    return (
        <div className='layout-container55'>
            <Navbar></Navbar>
            <div className='container777'>
                <div className='Cont44'>
                    <p className='text33'>How do you feel today ? </p>
                </div>
                <br></br>
                <br></br>
                <div className="word-cloud">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="word" // Added class for potential common styling
                            style={{
                                position: 'absolute',
                                fontSize: `${word.size}px`,
                                color: word.color,
                                fontWeight: word.fontWeight,
                                top: word.top,
                                left: word.left,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {word.text}
                        </span>
                    ))}
                </div>

                <div class="buttons777">

                    <Delete></Delete>

                </div>

            </div>
        </div>


    )
}

export default CreatedQuestion