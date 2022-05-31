import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import PlayerList from ".";
import { usePlayerList } from "../../state/hook/usePlayerList";

jest.mock("../../state/hook/usePlayerList", () => {
  return {
    usePlayerList: jest.fn(),
  };
});

describe("an empty player list", () => {
  beforeEach(() => {
    (usePlayerList as jest.Mock).mockReturnValue([]);
  });
  test("must be renderer without elements", () => {
    render(
      <RecoilRoot>
        <PlayerList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("a filled player list", () => {
  const players = ["Ana", "Catarina"];
  beforeEach(() => {
    (usePlayerList as jest.Mock).mockReturnValue(players);
  });
  test("must be renderer without elements", () => {
    render(
      <RecoilRoot>
        <PlayerList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(players.length);
  });
});
