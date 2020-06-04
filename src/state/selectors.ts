import { Pick2 } from "../utils/Pick2";
import { IState } from "./state/IState";

export const backoffInMs = (state: Pick2<IState, "sendPost", "backoffInMs">) =>
    state.sendPost.backoffInMs;
