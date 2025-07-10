import React, { useState } from 'react';
// const [counter , setCounter] = useState(0);


const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  }
  const handleEventHandler = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
  }
  return (
    <div className='m-10 flex flex-col justify-center items-center gap-5'>
      <form action="">
        <input className='input input-primary' placeholder='Your Name' name='name' type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;