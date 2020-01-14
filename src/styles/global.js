import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'; // Importação para mostrar os erros com o toastify
import background from '../assets/images/background.svg'; // importação do background padrão da aplicação

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); /* importa as fontes do google */
  * { /* todos os elementos da pãgina*/
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top; /* faz com que a imagem não repite, ela fique centralizada no topo da pãgina */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px  Roboto, sans-serif;
  }

  #root {
    max-width: 1020px; /*largua máxima para não ficar muito larga*/
    margin: 0 auto; /* Para a div ficar centralizada */
    padding: 0 20px 50px; 
  }

  button{
    cursor: pointer; /* fazer com que os botões tenham um cursor pointer */
  }

`;
