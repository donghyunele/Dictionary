import React from 'react';
import './Buttons.scss'
const Buttons = ({onSave, onReset}) => {
  return (
    <div className='buttonWrap'>
      <button className='Save' onClick={onSave}>저장</button>
      <button className='Reset' onClick={onReset}>초기화</button>
    </div>
  )
}

export default Buttons