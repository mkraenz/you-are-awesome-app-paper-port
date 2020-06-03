import { NavigationProp } from "@react-navigation/native";
import React, { FC } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { v4 } from "uuid";
import Layout from "../components/common/Layout";
import AddPostInput from "../components/contribution/AddPostInputs";
import OfflineNotice from "../components/contribution/OfflineNotice";
import { Route } from "../navigation/Route";
import { addPost } from "../state/action-creators/addPost";
import { IPost, IPostContent } from "../state/state/IPost";
import { MapStateToProps } from "../state/state/MapStateToProps";

interface StateProps {
    connectedToInternet: boolean;
}
interface DispatchProps {
    addPost: (post: IPost) => void;
}
type Props = StateProps & DispatchProps & NavigationProp<{ home: {} }>;

const ContributionScreen: FC<Props> = ({ connectedToInternet, addPost }) => {
    const handleSubmit = (post: IPostContent) => {
        if (!connectedToInternet) {
            Alert.alert("No Internet Connection.");
            return;
        }
        addPost({
            ...post,
            id: v4(),
        });
        // TODO translations
        const stayTuned =
            "\n\nBecause of the limited amount of messages we can show, we select contributions by hand. With some luck, your awesome message will be chosen soon, too. So stay tuned! :)";
        Alert.alert(
            "Thanks for your contribution!",
            `You are a valued member of our awesome community. \n Your message: \n ${post.text}${stayTuned}`,
            [
                {
                    text: "Awesome!",
                },
            ]
        );
    };

    return (
        <Layout route={Route.Contribute}>
            {connectedToInternet && <OfflineNotice />}
            <AddPostInput handleSubmit={handleSubmit} />
        </Layout>
    );
};

const mapStateToProps: MapStateToProps<StateProps> = (state) => ({
    connectedToInternet: state.network.connected,
});
const mapDispatchToProps: DispatchProps = { addPost };

export default connect(mapStateToProps, mapDispatchToProps)(ContributionScreen);
