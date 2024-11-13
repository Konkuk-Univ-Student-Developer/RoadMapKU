import { createGlobalStyle } from 'styled-components';
import Pretendard_regular from '../font/Pretendard-Regular.otf';
import Pretendard_semiBold from '../font/Pretendard-SemiBold.otf';
import Pretendard_bold from '../font/Pretendard-Bold.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-regular';
    src: url(${Pretendard_regular}) format('opentype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-semiBold';
    src: url(${Pretendard_semiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-bold';
    src: url(${Pretendard_bold}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Pretendard-regular';
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }
`;

export default GlobalStyle;
