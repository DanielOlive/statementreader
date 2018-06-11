import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Uploader from "./";

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({})
};

test("renders user deep correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Uploader />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
