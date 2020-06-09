import { AsyncStorage } from "react-native";
import { call, put, takeLatest } from "redux-saga/effects";
import { StorageSchema } from "../../../config";
import { AwaitedReturnType } from "../../../utils/AwaitedReturnType";
import { ActionType } from "../../actions/ActionType";
import { IReadSettingsSucceeded } from "../../actions/IAppAction";
import { deserialize } from "./deserializeSettings";

function* readSettingsWorkerSaga() {
    const settings: AwaitedReturnType<typeof readFromAsyncStorage> = yield call(
        readFromAsyncStorage
    );
    const success: IReadSettingsSucceeded = {
        type: ActionType.ReadSettingsSucceeded,
        payload: settings,
    };
    yield put(success);
}

async function readFromAsyncStorage(): Promise<
    IReadSettingsSucceeded["payload"]
> {
    try {
        const serializedSettings = (await AsyncStorage.multiGet([
            StorageSchema.PushNotificationsEnabled,
            StorageSchema.PushNotificationsScheduledTime,
        ])) as [StorageSchema, string][];
        const settings = deserialize(serializedSettings);
        return settings;
    } catch (error) {
        throw error;
    }
}

function* readSettingsFromStorageSaga() {
    yield takeLatest(
        [ActionType.ReadSettingsRequested],
        readSettingsWorkerSaga
    );
}

export default readSettingsFromStorageSaga;
