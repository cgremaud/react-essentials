import { render } from "@testing-library/react"
import App from "./App.js"
import React from "react";

test("renders an h1", () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/hello/); //queries document to get element with this text
    expect(h1).toHaveTextContent("hello") //toHaveTextContent means to have *exactly* that text content. 
})