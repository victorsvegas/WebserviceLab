import React from 'react';
import computer from '../src/ComputerMeme.png';

function Home () {
  return (
    <div>
      <h1 className="center">Welcome to my webservice project!</h1>
      <div className="center">
        <img src={computer} alt="ComputerThinking" className="imgComp"></img>
      </div>
    </div>
  );
}

export default Home
