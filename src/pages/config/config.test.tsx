import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import Config from ".";


const mockNavigator = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigator
    }
})

describe("the config page", () => {
  test("must be correct compiled", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();

  });
});
