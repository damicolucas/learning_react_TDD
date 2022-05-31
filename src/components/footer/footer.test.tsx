import React from "react";
import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from ".";
import { usePlayerList } from "../../state/hook/usePlayerList";
import { useNavigate } from "react-router-dom";

jest.mock("../../state/hook/usePlayerList", () => {
  return {
    usePlayerList: jest.fn(),
  };
});

const mockNavigator = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigator
    }
})

describe("if there are not enough players", () => {
  beforeEach(() => {
    (usePlayerList as jest.Mock).mockReturnValue([]);
  });

  test("game cannont be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("if there are enough players", () => {
  beforeEach(() => {
    (usePlayerList as jest.Mock).mockReturnValue(["Ana", "Laura", "Gabriela"]);
  });
  test("the game can be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("the game was started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button)

    expect(mockNavigator).toHaveBeenCalledTimes(1)
    expect(mockNavigator).toHaveBeenCalledWith('/raffle')
  });
});
