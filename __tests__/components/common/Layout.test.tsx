import React from "react";
import "react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Layout from "../../../src/components/common/Layout";
import { Route } from "../../../src/navigation/Route";
import TestLocalizationProvider from "../../helpers/TestLocalizationProvider";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <TestLocalizationProvider>
                <Layout route={Route.Home} />
            </TestLocalizationProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
