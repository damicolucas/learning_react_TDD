import shuffle from "just-shuffle"

export function executeRaffle (players: string[]) {
    const totalPlayers = players.length
    const raffledPlayers = shuffle(players)
    const result = new Map<string, string>()

    for (let index = 0; index < totalPlayers; index++) {
        const raffledPlayerIndex = index === (totalPlayers - 1 ) ? 0 : index + 1 
        result.set(raffledPlayers[index], raffledPlayers[raffledPlayerIndex])
    }

    return result 
}