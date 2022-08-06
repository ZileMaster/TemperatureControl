import React, { useState } from 'react';

const App = () => {
  const[temperatureValue, setTemperatureValue] = useState(10);
  const[tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    const newTemp = temperatureValue + 1;

    if(newTemp >= 15)
      setTempColor("hot");

    setTemperatureValue(newTemp);
  }

  const decreaseTemp = ()=> {
    const newTemp = temperatureValue - 1;

    if(newTemp < 15)
      setTempColor("cold");

    setTemperatureValue(newTemp);
  }
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>{temperatureValue}°C</div>
        </div>
        <div className='button-container'> 
          <button onClick={()=>increaseTemp()}>+</button>
          <button onClick={()=>decreaseTemp()}>-</button>
        </div>
      </div>
    );
};
export default App;