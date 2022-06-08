import React from 'react'
import '@styles/SpinnerLoader.scss'

const SpinnerLoader = () => {
  return (
    <div className='SpinnerLoader'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default SpinnerLoader