import { useNavigate } from "react-router-dom";
import { usePlayerList } from "../../state/hook/usePlayerList";
import { useRaffle } from "../../state/hook/useRaffle";
import { FooterContainer } from "./styles";

export default function Footer() {
  const players = usePlayerList();
  const navigator = useNavigate();
  const raffle = useRaffle();
  const start = () => {
    raffle()
    navigator("/raffle");
  };
  return (
    <FooterContainer>
      <button disabled={players.length < 3} onClick={start}>
        Iniciar Brincadeira
      </button>
      <img src="/img/sacolas.png" alt='shopping bag' />
    </FooterContainer>
  );
}
