import { useRecoilValue } from "recoil"
import { resultRaffle } from "../atom"

export const useRaffleResult = () => {
    return useRecoilValue(resultRaffle)
}