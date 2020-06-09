import { ActionType } from "../actions/ActionType";
import { ISetPushNotificationsState } from "../actions/IAppAction";

export const setNotificationsState = (
    enabled: boolean,
    scheduledTime: Date
): ISetPushNotificationsState => ({
    type: ActionType.SetPushNotificationsState,
    payload: {
        enabled,
        scheduledTime,
    },
});
