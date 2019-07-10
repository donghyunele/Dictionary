import React from 'react'
import style from './PageTemplate.less'

const PageTemplate = ({children}) => {
  return(
    <div className={style.pageTemplate}>
      <h1>To-Do List</h1>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate
