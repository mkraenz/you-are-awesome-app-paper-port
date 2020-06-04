import React from "react";
import "react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LanguageDropdownRow from "../../../src/components/settings/LanguageDropdown";

it("renders correctly", () => {
    const tree = renderer.create(<LanguageDropdownRow />).toJSON();
    expect(tree).toMatchSnapshot();
});
