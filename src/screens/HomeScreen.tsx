import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { IPostContent } from "../state/state/IPost";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

interface Props {
    post: IPostContent;
}

const HomeScreen: FC<Props> = ({
    post = {
        author: "Max",
        country: "Germany",
        text: "You can make a change. Stay awesome as you are!",
    },
}) => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Paragraph>{post.text}</Paragraph>
                    <Paragraph>
                        {post.author} from {post.country}
                    </Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
};

export default HomeScreen;
