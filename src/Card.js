import React from 'react';

const Card = ({ name, email, id }) => {
 
  return (
    <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-3'>
      <img src="robots" alt=""/>
      <div>
        <h2>{name}</h2>
        <img src={`https://robohash.org/${id}?200x200`} alt=""/>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;