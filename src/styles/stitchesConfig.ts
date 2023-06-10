import { createStitches } from "@stitches/react";

export const asRem = (size: number) => {
  return `${size / 16}rem`;
}

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      colorPrimary: '#ffffff',
      colorSecondary: '#000000',
      colorYellow: 'yellow',
      color1: '#100E17',
      color2: '#060F2F',
      color3: '#0E2252',
      color4: '#031740',
      color5: '#8A2BE2',
      colorRGBBlack: "0, 0, 0",
    },
    shadows: {
      shadowWhite: "#ffffff",
    }
  },
  media: {
    'bpMobile': `(max-width: ${asRem(767)})`,
    'bpTabMedium': `(max-width: ${asRem(900)})`,
    'bpTabMax': `(max-width: ${asRem(1024)})`,
  },
  utils: {
    px: (val: number) => ({
      paddingLeft: asRem(val),
      paddingRight: asRem(val),
    }),
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    background: "$color4",
    color: "$colorPrimary",
    overflow: 'hidden',
  },
  a: {
    textDecoration: 'none',
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  }
});
