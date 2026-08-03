import { createTheme } from '@mui/material/styles';

const brand = {
  indigo: {
    main: '#4F46E5',
    light: '#6366F1',
    dark: '#3730A3',
    contrastText: '#FFFFFF',
  },
  amber: {
    main: '#D97706',
    light: '#F59E0B',
    dark: '#92400E',
    contrastText: '#FFFFFF',
  },
};

const baseThemeConfig = {
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: '"Inter", "Manrope", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Inter',
      fontSize: '2.25rem',
      fontWeight: 800,
      '@media (min-width:768px)': {
        fontSize: '3.25rem',
      },
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '1.75rem',
      fontWeight: 800,
      '@media (min-width:768px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '1.35rem',
      fontWeight: 700,
      '@media (min-width:768px)': {
        fontSize: '1.65rem',
      },
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '1.15rem',
      fontWeight: 700,
      '@media (min-width:768px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 700,
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
      },
    },
  },
};

const customColors = {
  DEFAULT: brand.indigo.light,
  '100': '#E0E7FF',
  '200': '#C7D2FE',
  '300': '#818CF8',
  '400': '#6366F1',
  '500': brand.indigo.main,
  '600': '#3730A3',
  '700': '#312E81',
  '800': '#1E1B4B',
  '900': '#0F172A',
};

const customOrange = {
  DEFAULT: brand.amber.light,
  '100': '#FEF3C7',
  '200': '#FDE68A',
  '300': '#FCD34D',
  '400': '#FBBF24',
  '500': brand.amber.main,
  '600': '#D97706',
  '700': '#B45309',
  '800': '#92400E',
  '900': '#78350F',
};

export const darkTheme = createTheme({
  ...baseThemeConfig,
  palette: {
    mode: 'dark',
    primary: {
      main: brand.indigo.light,
      light: '#818CF8',
      dark: brand.indigo.main,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: brand.amber.light,
      light: '#FBBF24',
      dark: brand.amber.main,
      contrastText: '#0F172A',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      disabled: '#64748B',
    },
    divider: '#334155',
    purple: customColors,
    orange: customOrange,
  },
});

export const lightTheme = createTheme({
  ...baseThemeConfig,
  palette: {
    mode: 'light',
    primary: {
      main: brand.indigo.main,
      light: brand.indigo.light,
      dark: brand.indigo.dark,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: brand.amber.main,
      light: brand.amber.light,
      dark: brand.amber.dark,
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      disabled: '#94A3B8',
    },
    divider: '#E2E8F0',
    purple: customColors,
    orange: customOrange,
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    purple: typeof customColors;
    orange: typeof customOrange;
  }
  interface PaletteOptions {
    purple?: typeof customColors;
    orange?: typeof customOrange;
  }
}
