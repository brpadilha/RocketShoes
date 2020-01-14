import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  /* .header pois é o Header da aplicação */
  display: flex; /* alinhar os itens, um totalmente a esquerda e outro totalmente a direita */
  justify-content: space-between; /* é onde os ainha de forma separada igual */
  align-items: center; /* se um item for maior que o outro, alinhar eles verticalmente no centro*/
  margin: 50px 0; /*acrescenta uma margem de 50px em cima do header, para os itens descerem */
`;

export const Cart = styled(Link)`
  display: flex; /* alinha os textos no cart */
  align-items: center; /* faz com que eles se separem e fiquem alinhados verticalmente no centro */
  text-decoration: none; /* faz com que tire o sublinhado do link*/
  transition: opacity 0.2s; /*demora 2 milisegundos para escurecer */

  &:hover {
    /* faz um efeito visual de quando o usuário passa o mouse por cima */
    opacity: 0.7; /* fica mais escuro 70% */
  }

  div {
    text-align: right; /* faz com que fique totalmente alinhado para a direita*/
    margin-right: 10px; /* da uma margem de 10px do texto para o ícone da bolsa */

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
