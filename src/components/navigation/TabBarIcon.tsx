import { FontAwesome } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Theme, withTheme } from "react-native-paper";

const styles = StyleSheet.create({
    icon: {
        marginBottom: -3,
    },
});

interface Props {
    theme: Theme;
    name: string;
    focused: boolean;
}

const TabBarIcon: FC<Props> = ({ theme, name, focused }) => {
    const { colors } = theme;

    return (
        <FontAwesome
            name={name}
            size={26}
            style={styles.icon}
            color={focused ? colors.accent : colors.disabled}
        />
    );
};

export default withTheme(TabBarIcon);
