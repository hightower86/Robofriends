import React from 'react';

const Card = () => {
  return (
  <div className='bg-light-green dib pa3 ma2 grow'>
    <img src="robots" alt=""/>
    <div>
      <h2>Jane Doe</h2>
      <img src="https://robohash.org/test?200x200" alt=""/>
      <p>jane.doe@gmail.com</p>
    </div>
  </div>)
}

export default Card;