let key = "01f669f72f3dd488c5214f64c8b4c516"
let latitude = "28.0337";
let longitude = "26.2056"

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
 
fetch(url).then(function(response) {
    return response.json();
}).then(function(result) {
    console.log(result);

}).catch(function(error) {
    console.error(elserror);
})

// using async function to fetch weather data
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#weatherForm");
  const output = document.querySelector("#weatherResult");

  form.onsubmit = async function (e) {
    e.preventDefault();

    const lon = document.querySelector("#longitude").value.trim();
    const lat = document.querySelector("#latitude").value.trim();
    const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace this with your API key

    if (!lat || !lon) {
      output.textContent = "Please enter both latitude and longitude.";
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        output.textContent =
          "City: " + (data.name || "Unknown") + "\n" +
          "Description: " + data.weather[0].description + "\n" +
          "Temperature: " + data.main.temp + "°C\n" +
          "Pressure: " + data.main.pressure + " hPa\n" +
          "Humidity: " + data.main.humidity + "%\n" +
          "Wind Speed: " + data.wind.speed + " m/s";
      } else {
        output.textContent = "API Error: " + data.message;
      }
    } catch (err) {
      output.textContent = "Error: " + err.message;
    }
  };
});
