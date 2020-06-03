import React from "react";
import "react-native-gesture-handler";
import { Provider as StoreProvider } from "react-redux";
import "./localization/i18n";
import store from "./state/store";
import ThemedApp from "./themes/ThemedApp";

export default function App() {
    return (
        <StoreProvider store={store}>
            <ThemedApp />
        </StoreProvider>
    );
}
