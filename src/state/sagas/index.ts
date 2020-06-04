import { fork } from "redux-saga/effects";
import fetchPostsSaga from "./fetchPostsSaga";
import sendPostSaga from "./sendPostSaga";

export default function* rootSaga() {
    yield fork(fetchPostsSaga);
    yield fork(sendPostSaga);
}
