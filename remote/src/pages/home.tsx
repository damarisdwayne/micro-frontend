import React from "react";
// import './App.css'

import Button from '../components/button'
import useCount from '../store'

const Home: React.FC = () => {
  const [count, setCount] = useCount()
  return (
    <div>
      <h1>Remote Application</h1>
     <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default Home;
