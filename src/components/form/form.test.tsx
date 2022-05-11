import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./form";

test("when input is empty, new player cannot been added", () => {
  render(<Form />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText("Enter players names");

  //encontrar botão
  const button = screen.getByRole("button");

  //garantir que o Input esteja no documento
  expect(input).toBeInTheDocument();

  //garantir que o botão esteja desabilitado
  expect(button).toBeDisabled();
});
