import { call, takeLatest } from "redux-saga/effects";
import { registerForPushNotifications } from "../../../api/registerForPushNotifications";
import { unregisterFromPushNotifications } from "../../../api/unregisterFromPushNotifications";
import { ActionType } from "../../actions/ActionType";
import { ISetPushNotificationsState } from "../../actions/IAppAction";

export default registerOrUnregisterPushNotificationsSaga;

function* registerOrUnregisterPushNotificationsSaga() {
    yield takeLatest(
        [ActionType.SetPushNotificationsState],
        registerOrUnregisterPushNotificationsWorkerSaga
    );
}

function* registerOrUnregisterPushNotificationsWorkerSaga(
    action: ISetPushNotificationsState
) {
    // ensured internet connected on higher level
    if (action.payload.enabled) {
        yield call(registerForPushNotifications, action.payload.scheduledTime);
    } else {
        yield call(unregisterFromPushNotifications);
    }
}
