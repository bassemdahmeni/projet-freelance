import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PollHomeCard from './PollHomeCard'

function PollHome() {
  return (
    <div className='container99'>
        <Navbar></Navbar>
        <div className='Boxcontainer99'>
            <PollHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></PollHomeCard>
            <PollHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></PollHomeCard>
            <PollHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></PollHomeCard>
            <PollHomeCard date=" 14/12/2022" question=" How do you feel today? " Status=" Pending" ></PollHomeCard>

        </div>

    </div>
  )
}

export default PollHome