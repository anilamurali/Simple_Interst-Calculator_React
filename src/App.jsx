
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState('');
  const [rate,setRate]=useState('');
  const [year,setYear]=useState('');
  const [intrest,setIntrest]=useState('');
  // fetch value from input field
  console.log(amount);
  console.log(rate);
  console.log(year);

  const calculate=(e)=>{
    let result=amount*rate*year/100
    console.log(result);
    setIntrest(result)
  }
  const reset=(e)=>{
    setIntrest(0)
    setAmount('')
    setRate('')
    setYear('')
    
  }

  return (
    <div className="App">
      <div className="container">
        
        <div className="head">
          <h1>Simple Interest Calculator</h1>
          <p>The Simple Interest Calculator calculates the interest and end balance based on the simple interest formula. Click the tabs to calculate the different parameters of the simple interest formula. In real life, most interest calculations involve compound Interest. To calculate compound interest, use the Interest Calculator.</p>
        </div>

        <div className="card">
          <h2 className='symbol'> &#8377;</h2>
          <p className='text67'>Total Simple Interest :{intrest} </p>

        </div>
        <div className="input">
        <TextField value={amount} id="standard-basic" onChange={e=>setAmount(e.target.value)} label="Amount" variant="standard" />
        <TextField value={rate} id="standard-basic" onChange={e=>setRate(e.target.value)} label="Rate" variant="standard" />
        <TextField value={year} id="standard-basic" onChange={e=>setYear(e.target.value)} label="Year" variant="standard" />
        </div>
        <div className="button-group">
        <Button variant="contained" color='success' onClick={calculate}>Calculate</Button>
        <Button variant="contained" color='error' onClick={reset}>Reset</Button>
        </div>
        </div>
  
    </div>
  );
}

export default App;
