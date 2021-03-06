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
    backdrop: 'rgba(0, 10, 18, 0.7)',
  },

  breakpoints: ['768px', '1024px', '1440', '1920'],

  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],

  buttons: {
    filled: {
      fontFamily: 'primary',
      fontSize: [2, 3],
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
      fontSize: [2, 3],
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
      display: 'block',
      fontFamily: 'primary',
      fontSize: [3, 4],
    },
    heading: {
      fontFamily: 'primary',
    },
  },

  styles: {
    root: {
      scrollBehavior: 'smooth',
      scrollPaddingTop: [12, 8],
      fontFamily: 'primary',
      fontSize: [2, 4],
      lineHeight: '1.4',
    },
  },
};
