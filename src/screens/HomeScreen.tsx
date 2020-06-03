import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title, useTheme } from "react-native-paper";
import { connect } from "react-redux";
import Layout from "../components/common/Layout";
import { Route } from "../navigation/Route";
import { IPostContent } from "../state/state/IPost";
import { MapStateToProps } from "../state/state/MapStateToProps";
import { FullTheme } from "../themes/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        paddingHorizontal: 16,
    },
});

interface Props {
    post: IPostContent;
}

const HomeScreen: FC<Props> = ({ post }) => {
    const theme = useTheme() as FullTheme;
    const themedStyles = StyleSheet.create({
        card: theme.dark
            ? {
                  backgroundColor: theme.colors.accentedCard,
              }
            : { backgroundColor: theme.colors.primary },
    });
    return (
        <Layout route={Route.Home}>
            <View style={styles.container}>
                <Card style={themedStyles.card}>
                    <Card.Content>
                        <Title style={{ color: "white" }}>{post.text}</Title>
                        <Paragraph style={{ color: "white" }}>
                            {post.author} from {post.country}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </Layout>
    );
};

const mapStateToProps: MapStateToProps<Props> = (state) => ({
    post: state.posts.currentPost,
});

export default connect(mapStateToProps)(HomeScreen);
