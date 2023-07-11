import React from 'react'

const Note = ({note:{date,note}}) => {
  return (
    <div className='card mb-3'>
        <div className='card-header'>{date}</div>
        <div className='card-body'>{note}</div>
    </div>
  )
}

export default Note