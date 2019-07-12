import React from 'react'
import './PageTemplate.scss'

const PageTemplate = ({children}) => {
  return(
    <div className='pageTemplate'>
      <h1>Ing...</h1>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate
