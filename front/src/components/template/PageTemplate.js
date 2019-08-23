import React from 'react'
import './PageTemplate.scss'

const PageTemplate = ({engInput, children, eng, onChange}) => {
  return(
    <div className='pageTemplate'>
      <input ref={engInput} className='english' onChange={onChange} value={eng} placeholder='영어단어 입력'/>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate
