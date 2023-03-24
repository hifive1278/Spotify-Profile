import { css } from 'styled-components/macro';

const fonts = css`
  @font-face {
    font-family: 'Montserrat';
    src: url('../fonts/static/Montserrat-Medium.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('../fonts/static/Montserrat-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('../fonts/static/Montserrat-Black.ttf') format('ttf');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;