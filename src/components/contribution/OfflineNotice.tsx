import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const OfflineNotice: FC<{}> = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const styles = StyleSheet.create({
        offlineContainer: {
            marginHorizontal: -100, // ensure full width
            backgroundColor: theme.colors.error,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
        },
        offlineText: {
            color: "white",
        },
    });
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>{t("noInternet")}</Text>
        </View>
    );
};

export default OfflineNotice;
