'use client';
import React from 'react';
import PropTypes from 'prop-types';

const Bubble = ({ text }) => {
  return (
    <div className='bubble'>
      {text}
      <style jsx>{`
        .bubble {
          display: inline-block;
          padding: 10px 20px;
          background-color: white;
          color: #D7AE7D;
          border-radius: 0.7rem;
          border: 2px solid #D7AE7D;
          font-size: 16px;
          text-align: center;
          height:50px;
          margin-right:10px;
          margin-top:10px;
        }
      `}</style>
    </div>
  );
};

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Bubble;
