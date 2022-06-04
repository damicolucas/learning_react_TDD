import React, { useState } from "react"
import Card from "../../components/card"
import { usePlayerList } from "../../state/hook/usePlayerList"
import { useRaffleResult } from "../../state/hook/useRaffleResult"
import { RaffleButton, RaffleContainer } from "./styles"

export default function Raffle () {
    const [currentPlayer, setCurrentPlayer] = useState('')
    const [raffledPlayer, setRaffledPlayer] = useState<any>('')
    const players = usePlayerList()
    const result = useRaffleResult()

    const raffle =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(result.has(currentPlayer)){
            setRaffledPlayer(result.get(currentPlayer))
        }
    }

    return (
        <Card>
            <h2>Quem vai tirar o papelzinho?</h2>
            <RaffleContainer>
                <form onSubmit={raffle}>
                    <select 
                    value={currentPlayer}
                    onChange={e => setCurrentPlayer(e.target.value)}
                    required name="playerTime" id="playerTime" placeholder="Select your name">
                        {players.map(player => (<option key={player}>{player}</option>))}
                    </select>
                    <RaffleButton>Raffle</RaffleButton>
                </form>
                {raffledPlayer && <p className="resultado" role='alert'>{raffledPlayer}</p>}
                <footer className="sorteio">
                    <img src="/img/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </RaffleContainer>
        </Card >
    )
}