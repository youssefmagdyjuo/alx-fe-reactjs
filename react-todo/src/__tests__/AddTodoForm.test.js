import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm Component", () => {
  test("renders input and add button", () => {
    render(<AddTodoForm addTodo={() => {}} />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls addTodo when form is submitted with input", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    // simulate typing
    fireEvent.change(input, { target: { value: "Learn Jest" } });

    // simulate submit
    fireEvent.click(button);

    // check that addTodo was called correctly
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith("Learn Jest");

    // after submit, input should clear
    expect(input.value).toBe("");
  });

  test("does not call addTodo when input is empty", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const button = screen.getByText("Add");
    fireEvent.click(button);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
