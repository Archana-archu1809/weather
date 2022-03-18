import { all } from "redux-saga/effects";
import dataSaga from "./getWeathers";
export default function* rootSaga() {
  yield all([dataSaga()]);
}
