import Raffle from ".";
import React from "react";
import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePlayerList } from "../../state/hook/usePlayerList";
import { useRaffleResult } from "../../state/hook/useRaffleResult";

jest.mock("../../state/hook/usePlayerList", () => {
  return {
    usePlayerList: jest.fn(),
  };
});

jest.mock("../../state/hook/useRaffleResult", () => {
  return {
    useRaffleResult: jest.fn(),
  };
});

describe('on the raffle page', () => {
    const players = ['Ana', 'Catarina', 'Jorel']
    const result = new Map([
      ['Ana', 'jorel'],
      ['Jorel', 'Catarina'],
      ['Laura', 'Lucas']
    ])

    beforeEach(() => {
      (usePlayerList as jest.Mock).mockReturnValue(players);
    });

    beforeEach(() => {
      (useRaffleResult as jest.Mock).mockReturnValue(result);
    });

    test('all players can show his selected best friend', () => {
        render(
        <RecoilRoot>
            <Raffle />
        </RecoilRoot>)
        
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(players.length)
    })

    test('raffled player is displayed when request', () => {
      render(
        <RecoilRoot>
            <Raffle />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Select your name')
        fireEvent.change(select, {
          target:{
            value: players[0]
          }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const raffledPlayer = screen.getByRole('alert')
        expect(raffledPlayer).toBeInTheDocument
    })
})
