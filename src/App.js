import './App.css';
import React from 'react';
import Tilt from 'react-vanilla-tilt'

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
            <Tilt options={{ scale: 2, glare: 1.8 }} style={{width: 300, backgroundColor: "#000",}}>
              <div className='link'>
                <h1>Github</h1>
              </div>
            </Tilt>            
          </div>
        </div>
      </div>      

      <div class="bgcircle1"></div>
      <div class="bgcircle2"></div>
    </div>
  );
}

export default App;
