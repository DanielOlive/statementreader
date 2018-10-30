import React from "react";
import Footer from "./index";

const props = {
  cta: "",
  description: "",
  title: ""
};

describe("<Footer />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<Footer {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
