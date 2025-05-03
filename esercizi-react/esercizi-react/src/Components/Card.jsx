import React from 'react';

const Card = ({ children }) => {
  return <div className="card p-4 shadow-lg rounded-xl bg-white">{children}</div>;
};

export default Card;
