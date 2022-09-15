import React,{useState} from 'react'

function App() {
  const [temperatureValue,setTemperatureValue]=useState(37);
  const [temperatureColor,setTemperatureColor]=useState('cold');

 const increaseTemperature = () =>{
    const newTemperatureValue = temperatureValue+1;

    if(newTemperatureValue>=37)
    {
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperatureValue);
 }

 const decreaseTemperature = () =>{
  const newTemperatureValue = temperatureValue-1;

  if(newTemperatureValue<37)
  {
    setTemperatureColor('cold');
  }

  setTemperatureValue(newTemperatureValue);
}

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>

      <div className="button-container">
        <button onClick={()=>increaseTemperature()}>+</button>
        <button onClick={()=>decreaseTemperature()}>-</button>
      </div>
    </div>

  )
}

export default App
