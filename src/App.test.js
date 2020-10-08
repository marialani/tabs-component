import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the guardian news text", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/the guardian news/i);
  expect(heading).toBeInTheDocument();
});

// test guardian content api calls
// ensure all requests in the promise.all function are fulfilled

// test for loading text vs button text depending on newcontent state

// test the number of articles displayed

// test clicking the tab button changes the content and it renders correctly

// test whether article links work correctly
