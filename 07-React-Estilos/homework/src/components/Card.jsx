import React from 'react';
import Style from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={Style.general}>
    <div className={Style.button}>
      <button className={Style.closeButton} onClick={props.onClose}>x</button>
    </div>
    <h4 className={Style.city}>{props.name}</h4>
    <div className={Style.data}>
      <div className={Style.temp}>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <div className={Style.temp}>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='y'/>
    </div>
  </div>
  )
};