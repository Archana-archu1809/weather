import * as type from "../types";
export function getWeather(data) {
  console.log(data);
  return {
    type: type.GET_WEATHER_REQUESTED,
    payload: data,
  };
}
