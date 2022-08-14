import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Questions from "../components/Questions";

describe("Questions component", () => {
  it("question button renders", () => {
    render(<Questions />);
    const button = screen.getByText("Get Question");

    expect(button).toBeInTheDocument();
  });

  it("question renders on button click", () => {
    render(<Questions />);
    userEvent.click(screen.getByText("Get Question"));
    // simulate button click
    const question = screen.getByTestId("question-id");

    expect(question).toBeInTheDocument();
  });

  it("answer renders on button click", () => {
    render(<Questions />);
    userEvent.click(screen.getByText("Show Answer"));
    const answer = screen.getByTestId("answer-id");

    expect(answer).toBeInTheDocument();
  });
});
