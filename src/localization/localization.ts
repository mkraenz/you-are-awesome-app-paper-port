import { Resource } from "i18next";
import { Route } from "../navigation/Route";

type keys =
    | "darkMode"
    | "settings"
    | "appTitle"
    | "language"
    | "copyright"
    | "buildVersion";

export interface ITranslations extends Resource {
    default: { [key in keys]: string } & { [key in Route]: string };
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
            settings: "Settings",
            appTitle: "You are Awesome App!",
            language: "Language",
            copyright: "Copyright © Mirco Kraenz 2020",
            [Route.Home]: "Home",
            [Route.Settings]: "Settings",
            [Route.Share]: "Share",
            buildVersion: "Build version",
        },
    },
    de: {
        default: {
            darkMode: "Nachtmodus",
            settings: "Einstellungen",
            appTitle: "You are Awesome App!",
            language: "Sprache",
            copyright: "Copyright © Mirco Kraenz 2020",
            [Route.Home]: "Start",
            [Route.Settings]: "Einstellungen",
            [Route.Share]: "Teilen",
            buildVersion: "Programmversion",
        },
    },
    ja: {
        default: {
            darkMode: "ダークモード",
            settings: "設定",
            appTitle: "You are Awesome App!",
            language: "言語",
            copyright: "Copyright © Mirco Kraenz 2020",
            [Route.Home]: "ホーム",
            [Route.Settings]: "設定",
            [Route.Share]: "シェア",
            buildVersion: "ビルドバージョン",
        },
    },
};
export default localization;
