import { Notifications } from "expo";
import { URI } from "../config";

export const registerForPushNotifications = async (timeInUtc: Date) => {
    let token = await Notifications.getExpoPushTokenAsync();
    return fetch(URI.REGISTER_PUSH_NOTIFICATION, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token,
            hour: timeInUtc.getHours(),
            minute: timeInUtc.getMinutes(),
        }),
    });
};
