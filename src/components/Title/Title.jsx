import React from 'react'
import './Title.css'

const Title = ({title, titleText}) => {
  return (
    <div>
      <h3 className='title'>{title}</h3>
      <h5 className='title-text'>{titleText}</h5>
    </div>
  )
}

export default Title
