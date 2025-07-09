import React, { useState } from 'react';
// const [counter , setCounter] = useState(0);


const App = () => {
  const [counter, setCounter] = useState([0]);
  return (
    <div className='m-10 flex justify-center items-center gap-5'>
      <button className='btn-primary'>Click ME</button>
      <p>Total Clicked Time:{counter}</p>
    </div>
  );
};

export default App;