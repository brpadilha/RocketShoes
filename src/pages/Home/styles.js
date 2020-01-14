import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid; /* Para que os itens fiquem em uma grid*/
  grid-template-columns: repeat(
    3,
    1fr
  ); /* para que os itens criem 3 colunas com espaçamento igual*/
  grid-gap: 20px; /* distanciar os itens de forma ordenada em 20px */
  list-style: none; /* tirar as bolinhas dos <lis></lis> */

  li {
    display: flex;
    flex-direction: column; /* para ficar sempre uma informação alinhada embaixo da outra*/
    background: #fff; /* todo o conteúdo atrás fica em branco */
    border-radius: 4px; /* cria uma pequena angulação nos cantos dos itens */
    padding: 20px; /* dá um padding de 20px em todos os lados */

    img {
      align-self: center; /* Para que as imagens se centralizem*/
      max-width: 250px; /* Que tenham um tamanho máximo padrão de 250px */
    }

    > strong {
      /* usou o > para que pegue todos os strongs somente dentro do li */
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden; /* */
      margin-top: auto; /* Se o texto tiver muitas linhas, para que alinhe sempre os botões */

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')}; /*escurece o botão*/
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(
          0,
          0,
          0,
          0.1
        ); /* faz com que escureça, de preto, mas com 10% só de preto */
        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
