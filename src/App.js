import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFire , faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function App() {  
  
  let lastModified = "";
  lastModified = document.lastModified;  
  
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
            <a href='https://github.com/risixdzn' target='_blank'>
              <div className='link'>              
                <h1><FontAwesomeIcon icon={faGithub}/> Github</h1>
              </div>
            </a>    

            <a href='https://www.youtube.com/@risix' target='_blank' >
              <div className='link'>
                <h1><FontAwesomeIcon icon={faYoutube}/> Youtube</h1>  
              </div>   
            </a>

            <a href='https://twitter.com/burnfxbr' target='_blank'>
              <div className='link'>
                <h1><FontAwesomeIcon icon={faFire}/> BurnFX</h1>  
              </div> 
            </a>                                    
          </div>
          <div className='socials'>    
                    
            <a href='https://instagram.com/ricardo.rsx' target='_blank'><div className='social'><FontAwesomeIcon icon={faInstagram}/></div></a>
            <a href='https://linkedin.com' target='_blank'><div className='social'><FontAwesomeIcon icon={faLinkedin}/></div></a>
            <a href='mailto:contatorisix@gmail.com' target='_blank'><div className='social'><FontAwesomeIcon icon={faEnvelope}/></div></a>
          </div>
          <div className='credits'>
            <h1>Orgulhosamente feito por <a className='source' href='https://github.com/risixdzn/mylinks' target='_blank'><FontAwesomeIcon icon={faGithub}/><b>risixdzn</b></a></h1>
            <h2>Modificado em: {lastModified}</h2>
          </div>
          
          <div className="bgcircle1"></div>
          <div className="bgcircle2"></div>
        </div>        
      </div>      

    </div>
  );
}

export default App;
