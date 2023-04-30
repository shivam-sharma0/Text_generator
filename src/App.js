import React, { useState } from 'react';
import data from './data';


function App() {
  
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit= (e)=>{
     e.preventDefault();
   let amount=parseInt(count);
    if(amount<=0){
      amount=1;
    }
    setText(data.slice(0,amount));
  }
  

  return (
    <section className='section-center' >
      <h3>Text Generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit} >
        <label htmlFor="amount">Paragraph </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article>
          {text.map((item,index)=>{
            return <p key={index}>{item}</p>
          })}
      </article>
    </section>
    )
}

export default App;
