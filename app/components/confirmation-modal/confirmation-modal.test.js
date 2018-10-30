import React from "react";
import { shallow } from "enzyme";
import ConfirmationModal from "./index";

const props = {
  cta: "",
  description: "",
  title: ""
};

describe("<ConfirmationModal />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<ConfirmationModal {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
