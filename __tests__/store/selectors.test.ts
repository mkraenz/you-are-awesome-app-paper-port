import {
    backoffInMs,
    pushNotificationsEnabled,
} from "../../src/state/selectors";
import { IState } from "../../src/state/state/IState";
import { Pick2 } from "../../src/utils/Pick2";

it("backoffInMs returns backoff", () => {
    const state = {
        sendPost: { backoffInMs: 1337 },
    };

    const result = backoffInMs(state);

    expect(result).toBe(1337);
});

it("pushNotificationsEnabled returns the state", () => {
    const state: Pick2<IState, "app", "pushNotificationsEnabled"> = {
        app: { pushNotificationsEnabled: true },
    };

    const result = pushNotificationsEnabled(state);

    expect(result).toBe(true);
});
