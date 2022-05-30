import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, playersList } from "../atom";

export const useAddPlayer = () => {
  const setList = useSetRecoilState(playersList);
  const setError = useSetRecoilState(errorState);
  const list = useRecoilValue(playersList);
  return (playerName: string) => {
    if (list.includes(playerName)) {
      setError("Duplicated names are not allowed");
      setTimeout(() => setError(""), 5000);
      return;
    }
    return setList((currentList: string[]) => [...currentList, playerName]);
  };
};
