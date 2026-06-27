import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  // Hardcoded initial weather input state
  const [weatherData, setWeatherData] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div className="App">
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}

export default App;
