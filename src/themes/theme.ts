import {
    DarkTheme as NavDarkTheme,
    DefaultTheme as NavDefaultTheme,
} from "@react-navigation/native";
import { DarkTheme, DefaultTheme, Theme } from "react-native-paper";

type PriceColors = {
    colors: { positive: string; negative: string };
};

type NavigationTheme = typeof NavDarkTheme | typeof NavDefaultTheme;

export type FullTheme = Theme & PriceColors & NavigationTheme;

export const lightTheme: FullTheme = {
    ...NavDefaultTheme,
    ...DefaultTheme,
    colors: {
        ...NavDefaultTheme.colors,
        ...DefaultTheme.colors,
        primary: "#4e148c",
        positive: "#4cbb17",
        negative: "#f00",
    },
};

export const darkTheme: FullTheme = {
    ...NavDarkTheme,
    ...DarkTheme,
    colors: {
        ...NavDarkTheme.colors,
        ...DarkTheme.colors,
        primary: "#4e148c",
        card: "#202c39",
        positive: "#00ff00",
        negative: "#ff2400",
    },
};
