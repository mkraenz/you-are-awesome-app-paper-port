import React from "react";
import "react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LanguageDropdownRow from "../../../src/components/settings/LanguageDropdown";
import TestLocalizationProvider from "../../helpers/TestLocalizationProvider";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <TestLocalizationProvider>
                <LanguageDropdownRow />
            </TestLocalizationProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
