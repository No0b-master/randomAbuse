
import React, { useState, useEffect } from 'react';
import generateEmoji from './emoji';
import './App.css';
function App() {
  
  const [gaali, setGaali] = useState('');
  const [emoji , setEmoji] = useState('😝')

  useEffect(() => {
    generateGaali()
  }, []);

  const generateGaali = async() => {
    setEmoji(generateEmoji)
    
    try {
      const response = await fetch('http://159.65.159.8/profile_approval/hindi_abuse', {
        // 👇️ remove this
       // mode: 'no-cors', // 👈️
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, GET",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
      });
    
     
      const result = JSON.stringify(response);
      console.log(result.response);
      setGaali(result?.response)
     
     // return result;

    } catch (err) {
      setGaali('MAHESH DALLE')
      console.log(err);
    }

    // fetch('http://159.65.159.8/profile_approval/hindi_abuse', { mode: 'no-cors' })
    //   .then(function (response) {
    //     let ss = response.json()
    //     console.log(ss);
    //     setEmoji(generateEmoji)

        
    //     setGaali(response.body)


    //   }).catch(function (error) {
    //     console.log('Request failed', error)
    //   });
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
