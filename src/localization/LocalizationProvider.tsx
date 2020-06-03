import React, { FC } from "react";

const LocalizationProvider: FC = ({ children }) => {
    return <>{children}</>;
};

// const ReloadAppOnLanguageChange = withNamespaces('common', {
//     bindI18n: 'languageChanged',
//     bindStore: false,
//   })(createAppContainer(WrappedStack));

export default LocalizationProvider;
