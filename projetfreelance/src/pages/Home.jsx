import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Tableau from '../components/Tableau/Tableau'
import Create from '../components/buttons/Create'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="layout-container55">
       
        <Navbar></Navbar>
        <div className='container55'>
            <div class="button55"> <Link to='/Choice' style={{textDecoration:"none"}}><Create></Create></Link></div>
            <div class="tabcont55">
               <Tableau></Tableau>
            </div>
            
        </div>
       
    </div>
  )
}

export default Home