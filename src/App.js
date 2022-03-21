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
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

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
      <h1>{weather.name}</h1>
    </div>
  );
}

export default App;
