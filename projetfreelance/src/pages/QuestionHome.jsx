import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import QuestionHomeCard from './QuestionHomeCard'


function PollHome() {
  return (
    <div className='container99'>
        <Navbar></Navbar>
        <div className='Boxcontainer99'>
            <QuestionHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></QuestionHomeCard>
            <QuestionHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></QuestionHomeCard>
            <QuestionHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></QuestionHomeCard>
            <QuestionHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></QuestionHomeCard>
            
        </div>

    </div>
  )
}

export default PollHome