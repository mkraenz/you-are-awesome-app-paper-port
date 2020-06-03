import { IAppState } from "./IAppState";
import { IPostsState } from "./IPostsState";

export interface IState {
    posts: IPostsState;
    app: IAppState;
}
