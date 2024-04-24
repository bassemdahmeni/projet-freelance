import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

function PollHome(props) {
  return (
    
        
            <div className='Box77'>
                <p>Invited On:{props.date}</p>
                <p>Topic:{props.question}</p>
                <p>Status:{props.Status}</p>
                <Link to='/AnswerPoll' style={{textDecoration:"none"}}><button className='Button77'>Answer</button></Link>
                


            </div>

        
    
  )
}

export default PollHome