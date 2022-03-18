import logo from "./logo.svg";
import "./App.css";
import Datas from "./components/dataComponent";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const API_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
  const API_key = "d52baa827621023548c5a61511d4c43f";
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    console.log(
      `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
    );
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`;
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
      <h1>{weather.weather}</h1>
    </div>
  );
}

export default App;
