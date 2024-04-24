import React from 'react'
import Buttonnav from './Buttonnav'
import UserName from './UserName'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import { Link } from 'react-router-dom'

import style from './Navbar.module.css'

function Navbar() {
  
  return (
    <div className={style.container}>
        <div className={style.user}>
            <UserName></UserName>
        </div>
       
       <div  className={style.buttoncontainer}>
          <Link to="/HOME" style={{textDecoration:"none"}}><Buttonnav source={icon1} text="Home Page"></Buttonnav></Link>
          <Link to='/PollHome' style={{textDecoration:"none"}}><Buttonnav source={icon2} text="Polls"></Buttonnav></Link>
          <Link to='/QuestionHome' style={{textDecoration:"none"}}><Buttonnav source={icon3} text="Questions"></Buttonnav></Link>
          
       </div>

    </div>
  )
}

export default Navbar