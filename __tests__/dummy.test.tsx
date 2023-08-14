import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../src/pages/index"

test("Displays the correct title", () => {
let props = {
  };
  
const { getByTestId } = render(<IndexPage />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})