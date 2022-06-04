import React from "react";
import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from ".";
import { usePlayerList } from "../../state/hook/usePlayerList";

const mockNavigator = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigator
    }
})

jest.mock("../../state/hook/usePlayerList", () => {
  return {
    usePlayerList: jest.fn(),
  };
});

const mockRaffle = jest.fn()

jest.mock('../../state/hook/useRaffle', () => {
    return {
        useRaffle: () => mockRaffle
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
    expect(mockRaffle).toHaveBeenCalledTimes(1)
  });
});
