import React from 'react'
import './InputWord.scss'

const InputWord = ({wordInput, value, onChange, onInsert}) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onInsert()
    }
  }

  return (
    <div className='wordInput'>
      <input ref={wordInput} onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
      <div className='add-button' onClick={onInsert}>추가</div>
    </div>
  )
}

export default InputWord