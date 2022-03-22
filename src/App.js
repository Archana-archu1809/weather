import logo from "./logo.svg";
import { Card } from "antd";
import "./App.css";
import Datas from "./components/dataComponent";

import { useEffect, useState } from "react";
import axios from "axios";
const API_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "d52baa827621023548c5a61511d4c43f";
function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    console.log(
      "${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}"
    );
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;
    axios
      .get(finalAPIEndPoint)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Weather reports</h1>
      <h3>{weather.name}</h3>
      <h3>main:{weather.weather[0].main}</h3>

      <h3>Icon:{weather.weather[0].icon}</h3>
      <h3>Description:{weather.weather[0].description}</h3>
    </div>
  );
}

export default App;
