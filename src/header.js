import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../src/logo.png';

function Header() {
  return (
    <div>
      <div className="center">
            <Link to="/home"><img src={logo} alt="webservice project" className="imgHeader"></img></Link>
                 </div>
                    <div className='header'>
                        <div className='container'>
                            <ul>
                                <Link to="/home">Home</Link>
                                <Link to="/webservice_superheroes">Superhero Api</Link>
                                <Link to="/webservice_group">Group project</Link>
                            </ul>
                        </div>
                    </div>
    </div>
  );
}

export default Header;
