import React from "react";
import * as S from "./header.styles";

export default function Header() {
  return (
    <S.Container>
      <div className="img-logo" role="img" aria-label="Logo do Sorteador" />
      <img
        className="participante"
        src="/img/participante.png"
        alt="Participante com um presente na mão"
      />
    </S.Container>
  );
}
