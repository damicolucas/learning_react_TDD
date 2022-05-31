import { usePlayerList } from "../../state/hook/usePlayerList";

export default function PlayerList() {
  const players: string[] = usePlayerList();
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}
