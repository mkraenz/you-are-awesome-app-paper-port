import { fork } from "redux-saga/effects";
import fetchPostsSaga from "./fetchPostsSaga";

export default function* rootSaga() {
    yield fork(fetchPostsSaga);
}
