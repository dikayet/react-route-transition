import React from 'react'

const WithTransition = ({ active, init }) => {
  if(!active) return null;
  return (
    <div className='with-transition'>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
  )
}

export default WithTransition
