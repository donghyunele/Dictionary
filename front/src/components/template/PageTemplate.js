import React from 'react'
import './PageTemplate.scss'

const PageTemplate = ({children, eng, onChange}) => {
  return(
    <div className='pageTemplate'>
      <input className='english' onChange={onChange} value={eng} placeholder='영어단어 입력'/>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate
