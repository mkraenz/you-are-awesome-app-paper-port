import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Appbar } from "react-native-paper";
import { Route } from "../../navigation/Route";

interface Props {
    title: string;
    icon?: string;
}

const MyAppbar: FC<Props> = ({ title, icon = "menu" }) => {
    const navigation = useNavigation();
    return (
        <Appbar.Header>
            <Appbar.Action icon={icon} onPress={() => navigation.goBack()} />
            <Appbar.Content title={title} />
            <Appbar.Action
                icon="magnify"
                onPress={() => navigation.navigate(Route.Settings)}
            />
            <Appbar.Action icon="dots-vertical" onPress={() => undefined} />
        </Appbar.Header>
    );
};

export default MyAppbar;
