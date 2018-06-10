import React from "react";
import { shallow, configure } from "enzyme";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";

it("renders correctly", () => {
  configure({ adapter: new Adapter() });
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
