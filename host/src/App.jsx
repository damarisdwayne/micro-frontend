import "./App.css";

import Button from "remoteApp/button";
import Header from "remoteApp/header";
import useStore from "remoteApp/store";
import Navigation from "remoteApp/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useStore(0);

  return (
      <BrowserRouter>
        <Header />
        <h1>Host Application</h1>
        <Button />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Navigation />
      </BrowserRouter>
  );
}

export default App;
