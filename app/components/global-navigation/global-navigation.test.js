import React from "react";
import GlobalNav from "./index";

describe("<GlobalNav />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<GlobalNav />);
    expect(tree).toMatchSnapshot();
  });
});
