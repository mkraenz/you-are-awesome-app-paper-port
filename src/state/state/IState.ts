import { IAppState } from "./IAppState";
import { INetworkState } from "./INetworkState";
import { IPostsState } from "./IPostsState";

export interface IState {
    posts: IPostsState;
    app: IAppState;
    network: INetworkState;
}
