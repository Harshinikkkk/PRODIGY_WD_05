async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "74d846479e0cf24bc5a52e3e40bf49bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
        document.getElementById("weather-result").innerHTML = weatherInfo;
      } else {
        document.getElementById("weather-result").innerHTML = `<p>City not found!</p>`;
      }
    } catch (error) {
      document.getElementById("weather-result").innerHTML = `<p>Error fetching weather data.</p>`;
    }
  }
  