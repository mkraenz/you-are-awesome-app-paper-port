import { Resource } from "i18next";
import { Route } from "../navigation/Route";

export interface ITranslations extends Resource {
    default: {
        darkMode: string;
        favoritesEmpty: string;
        settings: string;
        favorites: string;
        appTitle: string;
        preferAbsoluteOverPercent: string;
        language: string;
        [Route.Home]: string;
        [Route.Settings]: string;
    };
}

export enum Language {
    English = "en",
    German = "de",
    Japanese = "ja",
}

export enum LanguageCodeToLocalizedLang {
    en = "English",
    de = "Deutsch",
    ja = "日本語",
}

const localization: {
    [locale in Language]: ITranslations;
} = {
    en: {
        default: {
            darkMode: "Dark mode",
            favoritesEmpty: "No favorites selected yet.",
            favorites: "Watchlist",
            settings: "Settings",
            appTitle: "You are Awesome App!",
            preferAbsoluteOverPercent: "prefer absolute over %",
            language: "Language",
            [Route.Home]: "Home",
            [Route.Settings]: "Settings",
        },
    },
    de: {
        default: {
            darkMode: "Nachtmodus",
            favoritesEmpty: "Bislang keine Favoriten ausgewählt.",
            settings: "Einstellungen",
            favorites: "Favoriten",
            appTitle: "You are Awesome App!",
            preferAbsoluteOverPercent: "bevorzuge absolut gegenüber %",
            language: "Sprache",
            [Route.Home]: "Home",
            [Route.Settings]: "Einstellungen",
        },
    },
    ja: {
        default: {
            darkMode: "ダークモード",
            favoritesEmpty: "お気に入り（０）",
            settings: "設定",
            favorites: "お気に入り",
            appTitle: "You are Awesome App!",
            preferAbsoluteOverPercent: "絶対量を%より優先する",
            language: "言語",
            [Route.Home]: "すごい",
            [Route.Settings]: "設定",
        },
    },
};
export default localization;
