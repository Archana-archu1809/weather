import { call, put, takeEvery } from "redux-saga/effects";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      appid: `Bearer + $ d52baa827621023548c5a61511d4c43f`,
      lat: "35",
      lon: "139",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
function* fetchData() {
  try {
    const data = yield call(getApi);
    yield put({ type: "GET_WEATHER_SUCESS", data: data });
  } catch (e) {
    yield put({ type: "GET_WEATHER_FAILURE", message: e.message });
  }
}
function* dataSaga() {
  yield takeEvery("GET_WEATHER_REQUESTED", fetchData);
}
export default dataSaga;
