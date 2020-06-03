import { ActionType } from "./ActionType";
import { IAction } from "./utils";

export type IAppAction = IToggleDarkThemeAction;

export type IToggleDarkThemeAction = IAction<ActionType.ToggleDarkTheme>;
