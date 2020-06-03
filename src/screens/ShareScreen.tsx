import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import Layout from "../components/common/Layout";
import { Route } from "../navigation/Route";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

interface Props {}

const ShareScreen: FC<Props> = ({}) => {
    return (
        <Layout route={Route.Share}>
            <View style={styles.container}>
                <Card>
                    <Card.Content>
                        <Paragraph>share here</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </Layout>
    );
};

export default ShareScreen;
