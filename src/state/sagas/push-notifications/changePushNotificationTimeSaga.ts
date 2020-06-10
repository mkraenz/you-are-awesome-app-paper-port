import { call, takeLatest } from "redux-saga/effects";
import { askNotificationPermissions } from "../../../api/native-api/askNotificationPermissions";
import { registerForPushNotifications } from "../../../api/registerForPushNotifications";
import { unregisterFromPushNotifications } from "../../../api/unregisterFromPushNotifications";
import { ActionType } from "../../actions/ActionType";
import { IChangePushNotificationTime } from "../../actions/IAppAction";

export default changePushNotificationTimeSaga;

function* changePushNotificationTimeSaga() {
    yield takeLatest(
        [ActionType.ChangePushNotificationTime],
        changePushNotificationTimeWorkerSaga
    );
}

function* changePushNotificationTimeWorkerSaga(
    action: IChangePushNotificationTime
) {
    yield call(askNotificationPermissions);
    // ensured notifications enabled and internet connected on higher level
    yield call(unregisterFromPushNotifications);
    yield call(registerForPushNotifications, action.payload.scheduledTime);
}
