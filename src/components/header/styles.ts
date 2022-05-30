import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  .img-logo {
    background-image: url("/img/logo.png");
    width: 351px;
    height: 117px;
  }
  .participante {
    z-index: 1;
  }

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;

    .img-logo {
      background-image: url("/img/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }
  }
`;
