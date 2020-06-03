import { Resource } from "i18next";
import { Route } from "../navigation/Route";

type keys =
    | "darkMode"
    | "settings"
    | "appTitle"
    | "language"
    | "copyright"
    | "noInternet"
    | "buildVersion"
    | "contributeAwesomeMessage"
    | "contributeAwesomeMessageLong"
    | "contributeCountry"
    | "contributeSubmit"
    | "contributeName";

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
            copyright:
                "Copyright © Kraenz Software Development\nMirco Kraenz 2020",
            [Route.Home]: "Home",
            [Route.Settings]: "Settings",
            [Route.Contribute]: "Contribute",
            buildVersion: "Build version",
            noInternet: "No Internet Connection",
            contributeAwesomeMessage: "Awesome Message",
            contributeAwesomeMessageLong: "Your awesome message to the world",
            contributeCountry: "Country",
            contributeName: "First Name",
            contributeSubmit: "Submit",
        },
    },
    de: {
        default: {
            darkMode: "Nachtmodus",
            settings: "Einstellungen",
            appTitle: "You are Awesome App!",
            language: "Sprache",
            copyright:
                "Copyright © Kraenz Software Development\nMirco Kraenz 2020",
            [Route.Home]: "Start",
            [Route.Settings]: "Einstellungen",
            [Route.Contribute]: "Teilen",
            buildVersion: "Programmversion",
            noInternet: "Keine Internetverbindung",
            contributeAwesomeMessage: "Awesome Nachricht",
            contributeAwesomeMessageLong: "Deine awesome Nachricht an die Welt",
            contributeCountry: "Land",
            contributeName: "Vorname",
            contributeSubmit: "Senden",
        },
    },
    ja: {
        default: {
            darkMode: "ダークモード",
            settings: "設定",
            appTitle: "You are Awesome App!",
            language: "言語",
            copyright:
                "Copyright © Kraenz Software Development\nMirco Kraenz 2020",
            [Route.Home]: "ホーム",
            [Route.Settings]: "設定",
            [Route.Contribute]: "シェア",
            buildVersion: "ビルドバージョン",
            noInternet: "インターネットに接続できませんでした",
            contributeAwesomeMessage: "すごいメッセージ",
            contributeAwesomeMessageLong:
                "世界の皆さんに伝いたいすごいメッセージ",
            contributeCountry: "国",
            contributeName: "ニックネーム",
            contributeSubmit: "送信",
        },
    },
};
export default localization;
