import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Divider, Paragraph, Switch } from "react-native-paper";
import { connect } from "react-redux";
import Layout from "../components/common/Layout";
import LanguageDropdownRow from "../components/settings/LanguageDropdown";
import SettingsRow from "../components/settings/SettingsRow";
import { Route } from "../navigation/Route";
import { toggleDarkTheme } from "../state/action-creators/toggleDarkTheme";
import { MapStateToProps } from "../state/state/MapStateToProps";
import version from "../utils/version.json";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

interface StateProps {
    isDarkModeOn: boolean;
}
interface DispatchProps {
    toggleDarkTheme: () => void;
}

type Props = StateProps & DispatchProps;

const SettingsScreen: FC<Props> = ({ isDarkModeOn, toggleDarkTheme }) => {
    const { t } = useTranslation();
    return (
        <Layout route={Route.Settings}>
            <View style={styles.container}>
                <SettingsRow
                    title={t("darkMode")}
                    onPress={toggleDarkTheme}
                    rightComponent={() => (
                        <Switch
                            value={isDarkModeOn}
                            onValueChange={toggleDarkTheme}
                        ></Switch>
                    )}
                ></SettingsRow>
                <Divider />
                <LanguageDropdownRow />
                <Divider />
                <About />
            </View>
        </Layout>
    );
};

const About = () => {
    const { t } = useTranslation();
    return (
        <View style={{ marginTop: "auto", marginHorizontal: 16 }}>
            <Paragraph>
                {t("buildVersion")} {version.jsBuildNumber}
            </Paragraph>
            <Paragraph>{t("copyright")}</Paragraph>
        </View>
    );
};

const mapStateToProps: MapStateToProps<StateProps> = (state) => ({
    isDarkModeOn: state.app.isDarkModeOn,
});

const mapDispatchToProps: DispatchProps = {
    toggleDarkTheme,
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
