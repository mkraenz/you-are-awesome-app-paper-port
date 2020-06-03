import { Reducer } from "redux";
import { ActionType } from "../actions/ActionType";
import { IAppAction } from "../actions/IAppAction";
import { IAppState } from "../state/IAppState";

export const appReducer: Reducer<IAppState, IAppAction> = (
    state = {
        isDarkModeOn: false,
    },
    action
) => {
    switch (action.type) {
        case ActionType.ToggleDarkTheme:
            return {
                ...state,
                isDarkModeOn: !state.isDarkModeOn,
            };
    }
    return state;
};
