import { useState, useEffect } from 'react';
import './App.css';
import { checkUser } from './firebase/auth';

function App() {
  useEffect(()=>{
    checkUser();
  }, [])
  
  return (
    <div className="App flex just-center align-center">
      <div>
        <h1> Login with phone </h1>
        <input className='userPhone' type={`number`}/>    
      </div>
    </div>
  );
}

export default App;
