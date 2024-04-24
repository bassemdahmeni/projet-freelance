import React from 'react'
import icon4 from '../../assets/icon4.png'
import style from './UserName.module.css'

function UserName() {
  return (
    <div className={style.container}>
        <img src={icon4} className={style.image}></img>
        <p className={style.texte}>Youssef</p>
    </div>
  )
}

export default UserName