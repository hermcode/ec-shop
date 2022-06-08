import React from 'react'
import NotFoundImage from '@logos/page_not_found.svg'

import '@styles/NotFound.scss'

const NotFound = () => {
  return (
    <section className='NotFound'>
      <div className='NotFound-container'>
        <figure className='NotFound-figure'>
          <img src={NotFoundImage} alt="Not found image" />
        </figure>
        <h1 className='NotFound-title'>Hmmmm!</h1>
        <p className='NotFound-message'>No encontramos lo que buscabas.</p>
      </div>
    </section>
  )
}

export default NotFound