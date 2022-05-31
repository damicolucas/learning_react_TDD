import { useRecoilValue } from "recoil"
import { playersList } from "../atom"

export const usePlayerList = () => {
    return useRecoilValue(playersList)
}