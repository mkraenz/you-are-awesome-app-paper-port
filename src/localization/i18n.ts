import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import localization from "./localization";

const languageDetector = {
    type: "languageDetector" as const,
    async: true, // flags below detection to be async
    detect: (callback: (locale: string) => void) => {
        callback(Localization.locale);
    },
    init: () => {},
    cacheUserLanguage: () => {},
};

const resources = localization;

i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        defaultNS: "default",
        debug: true,
        interpolation: {
            escapeValue: false, // not needed; default behavior of react
        },
        cleanCode: true,
    });

export default i18n;
