// src/stitches.config.js
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText, theme, keyframes } = createStitches({
  theme: {
    colors: {
      'purple-light': '#FA0AFF',
      'purple-base': '#AC35AE',
      'purple-dark': '#5D095F',
      'black-purple': '#19031D',
    },
    space: {
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '40px',
    },
    fontSizes: {
      s: '14px',
      m: '16px',
      l: '18px',
      xl: '24px',
    },
  },
});