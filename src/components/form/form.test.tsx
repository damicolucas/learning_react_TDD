import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Form from "./form";

describe('form.tsx behavior', () => {
  test("when input is empty, new player cannot been added", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Enter players names");
    //encontrar botão
    const button = screen.getByRole("button");
    //garantir que o Input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });
  
  test("How to add player if name field is filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Enter players names");
    //encontrar botão
    const button = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botão de submit
    fireEvent.click(button);
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });
  
  test("Duplicated names may not be added to the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText("Enter players names");
    const button = screen.getByRole("button");
    //adiciona o nome em questão
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //duplica este mesmo nome
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);
  
    const errorAlert = screen.getByRole("alert");
  
    // espera que o alerta seja exibido
    expect(errorAlert.textContent).toBe("Duplicated names are not allowed");
  });
  
  test("Error message may disappear after the time", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText("Enter players names");
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);
  
    // espera que o alerta seja exibido
    let errorAlert = screen.queryByRole("alert");
    expect(errorAlert).toBeInTheDocument();
  
    // esperar n segundos
    act(() => {
      jest.runAllTimers();
    });
  
    // espera que o alerta desapareça
    errorAlert = screen.queryByRole("alert");
    expect(errorAlert).toBeNull();
  });
  

})

