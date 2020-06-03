import React, { FC, ReactNode } from "react";
import { List, TouchableRipple } from "react-native-paper";

const SettingsRow: FC<{
    onPress: () => void;
    title: string;
    rightComponent?: () => ReactNode;
}> = ({ onPress, title, rightComponent }) => (
    <TouchableRipple onPress={onPress}>
        <List.Item key={title} title={title} right={rightComponent}></List.Item>
    </TouchableRipple>
);

export default SettingsRow;
