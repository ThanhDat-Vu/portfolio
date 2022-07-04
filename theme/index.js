import '@fontsource/josefin-sans';

export const theme = {
  fonts: {
    primary: 'Josefin Sans',
  },

  fontSizes: [10, 12, 14, 16, 20, 24, 32, 36, 40, 48, 64, 96, 128],

  colors: {
    primary: '#FFFFFF',
    secondary: '#000A12',
    accent: '#D71D1D',
  },

  breakpoints: ['960px', '1024px', '1440', '1920'],

  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],

  buttons: {
    filled: {
      fontFamily: 'primary',
      fontWeight: 'bold',
      color: 'primary',
      bg: 'accent',
      border: '3px solid',
      borderColor: 'accent',
      borderRadius: 0,
      cursor: 'pointer',
      px: [3, 4],
      py: [2, 3],
      ':hover': {
        transform: 'translate(-2px, -2px)',
        boxShadow: '4px 4px #000A12',
      },
    },
    outlined: {
      fontFamily: 'primary',
      fontWeight: 'bold',
      color: 'secondary',
      bg: 'transparent',
      border: '3px solid',
      borderColor: 'accent',
      borderRadius: 0,
      cursor: 'pointer',
      px: [3, 4],
      py: [2, 3],
      ':hover': {
        transform: 'translate(-2px, -2px)',
        boxShadow: '4px 4px 0 -2px #FFFFFF, 4px 4px #000A12',
      },
    },
  },

  text: {
    default: {
      fontFamily: 'primary',
      fontSize: [3, 4],
    },
    heading: {
      fontFamily: 'primary',
      fontSize: [7, 8],
      lineHeight: ['1.2', '1.5'],
    },
  },

  styles: {
    root: {
      fontFamily: 'primary',
      fontSize: [2, 3],
      lineHeight: '1.5',
    },
  },
};
