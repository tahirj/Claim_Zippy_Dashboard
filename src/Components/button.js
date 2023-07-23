
import { useState } from "react";
import { data } from "./data";

function Button() {
    const [state, setState] = useState({
        toggle: [],
        index: ""
});
const onJoin = (index) => {
    setState((state) => ({
      ...state,
      toggle: state.toggle.filter((t) => t !== index)
    }));
  };

  const onRequest = (index) => {
    setState((state) => ({
      ...state,
      toggle: [...state.toggle, index]
    }));
  };
  return (
    <div className="App">
      {data.map((d, index) => (
        <div key={index} className="container">
          <h1>{d.name}</h1>
          {state.toggle.includes(index) ? (
            <button onClick={() => onJoin(index)}>Join</button>
          ) : (
            <button onClick={() => onRequest(index)}>Request</button>
          )}
        </div>
      ))}
    </div>
  );
}
export default Button