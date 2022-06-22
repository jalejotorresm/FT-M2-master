import React from 'react';
import Style from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={Style.background}>
    <input type='text' placeholder='Ciudad...' />
    <button className={Style.button} onClick={props.onSearch}>
      Agregar
    </button>
  </div>
  )
};