import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional color mapping: red if above 20, otherwise blue
  const temperatureColor = temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)';

  return (
    <div>
      {/* First p tag displays the temperature string with a nested span for styling */}
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{temperature}</span>
      </p>

      {/* Second p tag displays the conditions */}
      <p>
        Conditions: {conditions}
      </p>
    </div>
  );
}

export default WeatherDisplay;
