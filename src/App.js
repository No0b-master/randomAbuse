
import React, { useState, useEffect } from 'react';
import generateEmoji from './emoji';
import './App.css';
function App() {
  
  const [gaali, setGaali] = useState('');
  const [emoji , setEmoji] = useState('😝')

  useEffect(() => {
    generateGaali()
  }, []);

  const generateGaali = () => {
    fetch('http://159.65.159.8/profile_approval/hindi_abuse', { mode: 'no-cors' })
      .then(function (response) {
        console.log(response);
        setEmoji(generateEmoji)

        
        setGaali(response.abuse)


      }).catch(function (error) {
        console.log('Request failed', error)
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize:128}}>{emoji}</p>

        <h3>{gaali}</h3>

        <p>
          Random Gaali Generator
        </p>

        <button style={{
          marginTop:'32px',
          padding: '16px',
          width: '120px',
          boxShadow: '0px 0px 7px 2px gray',
          background: 'antiquewhite',
          borderRadius: '8px'
        }} onClick={generateGaali}>generate</button>
      </header>



    </div>
  );
}

export default App;
