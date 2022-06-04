import { executeRaffle } from './executeRaffle'

describe('consider a raffle', () => {
    test('each player may not get them on name', () => {
        const players = ['Ana', 'Catarina', 'João', 'Lucas', 'Laura', 'Vinicius']

        const raffle = executeRaffle(players)
        players.forEach(player => {
            const raffledPlayer = raffle.get(player)
            expect(raffledPlayer).not.toEqual(player)
        })
    })
})