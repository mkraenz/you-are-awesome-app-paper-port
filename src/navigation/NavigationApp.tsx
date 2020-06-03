import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";
import TabBarIcon from "../components/navigation/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ShareScreen from "../screens/ShareScreen";
import { Route } from "./Route";

const Tab = createMaterialBottomTabNavigator();
``;
const NavigationApp = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <NavigationContainer theme={theme as any}>
            <Tab.Navigator initialRouteName={t(Route.Home)}>
                <Tab.Screen
                    name={t(Route.Share)}
                    component={ShareScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name="share-alt" />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t(Route.Home)}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name="home" />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t(Route.Settings)}
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name="cog" />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default NavigationApp;
