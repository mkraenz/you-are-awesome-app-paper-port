import { backoffInMs } from "../../src/state/selectors";

it("backoffInMs returns backoff", () => {
    const state = {
        sendPost: { backoffInMs: 1337 },
    };

    const result = backoffInMs(state);

    expect(result).toBe(1337);
});
