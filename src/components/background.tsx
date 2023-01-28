import React from 'react';

const Background = () => (
  <div className="absolute background w-screen h-screen flex -z-50">
    <div className="bg-socializer w-1/4 flex flex-col items-center" />
    <div className="bg-explorer w-1/4 flex flex-col items-center" />
    <div className="bg-achiever w-1/4 flex flex-col items-center" />
    <div className="bg-killer w-1/4 flex flex-col items-center" />
  </div>
);

export default Background;
