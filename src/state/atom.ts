import { atom } from "recoil";

export const playersList = atom<string[]>({
  key: "playersList",
  default: [],
});

export const errorState = atom<string>({
  key: "stateError",
  default: "",
});

export const resultRaffle = atom<Map<string, string>>({
  key: "resultRaffle",
  default: new Map(),
});
