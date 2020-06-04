import { IState } from "./state/IState";

export const backoffInMs = (state: Pick<IState, "network">) =>
    state.network.backoffInMs;
