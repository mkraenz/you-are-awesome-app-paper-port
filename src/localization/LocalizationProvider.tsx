import React, { FC } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const LocalizationProvider: FC = ({ children }) => {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

// const ReloadAppOnLanguageChange = withNamespaces('common', {
//     bindI18n: 'languageChanged',
//     bindStore: false,
//   })(createAppContainer(WrappedStack));

export default LocalizationProvider;
