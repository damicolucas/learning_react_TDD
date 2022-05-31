import { useNavigate } from "react-router-dom";
import { usePlayerList } from "../../state/hook/usePlayerList";
import { FooterContainer } from "./styles";

export default function Footer() {
  const players = usePlayerList();
  const navigator = useNavigate();
  const start = () => {
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
