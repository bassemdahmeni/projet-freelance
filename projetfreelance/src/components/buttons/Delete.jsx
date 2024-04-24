import React from 'react'
import style from './Delete.module.css'
import icon6 from '../../assets/icon6.png'

function Delete() {
  return (
    <div className={style.container}>
        <button className={style.bouton}>
            <div className={style.texte}>Delete</div>
            <img src={icon6} className={style.image}></img>
        </button>
    </div>
  )
}

export default Delete