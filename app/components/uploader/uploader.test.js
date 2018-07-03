import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import Uploader from "./index";

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({})
};
const props = {
  uploadCSV: () => {}
};

describe("<Uploader />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(
      <Provider store={store}>
        <Uploader {...props} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
