import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {

  const [city,setCity] = useState("Delhi");
  const [weatherData,setWeatherData] = useState(null);

  const API_KEY = "bcda10ba323e88e96cb486015a104d1d";


// function to fetch the data from api
  const fetchWeatherData = async () => {

    try {
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

      const data = await response.json();
      console.log(data);
      setWeatherData(data) 



    } catch (error) {
      
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWeatherData();
  },[])

// Gives the input. whatever i type in the search city thing shows on console 
// hello
// looks funny haha

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  }

// Prevents the whole page from reloading
// Gives time for the user to see the result 
// very important function

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  }


  const currentDate = new Date();
  // console.log(currentDate)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`
  


  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>
        <div className="weather_data">
          <h2 className="container_city">Delhi</h2>
          <img
            src="../thunder.png.webp"
            alt=""
            className="container-img"
            width="180px"
          />
          <h2 className="container_degree">34.2</h2>
          <h2 className="country_per">Sunny Weather</h2>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Enter City Name" onChange={handleInputChange}
            />
            <button type="submit">Fetch</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
