import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="container">
        <div className="info">
          <div className="profile">
            <div className="piccircle"></div>
            <h1>@ricardo.rsx</h1>
            <h2>Editor de vídeo e desenvolvedor front-end.</h2>
            <hr></hr>
          </div>
          <div className='links'>            
            <div className='link'>              
              <h1><FontAwesomeIcon icon={faGithub}/> Github</h1>
            </div>    
            <div className='link'>
              <h1><FontAwesomeIcon icon={faYoutube}/> Youtube</h1>  
            </div>   
            <div className='link'>
              <h1><FontAwesomeIcon icon={faFire}/> BurnFX</h1>  
            </div>                         
          </div>
        </div>
      </div>      

      <div class="bgcircle1"></div>
      <div class="bgcircle2"></div>
    </div>
  );
}

export default App;
