import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

interface Props {}

const SettingsScreen: FC<Props> = ({}) => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Paragraph>settings here</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
};

export default SettingsScreen;
