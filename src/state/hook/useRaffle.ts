import { useSetRecoilState } from "recoil"
import { resultRaffle } from "../atom"
import { executeRaffle } from "../helpers/executeRaffle"
import { usePlayerList } from "./usePlayerList"

export const useRaffle = () => {
    const players = usePlayerList()
    const setResult = useSetRecoilState(resultRaffle)
    return () => {
        const result = executeRaffle(players)
        setResult(result)
    }
} 