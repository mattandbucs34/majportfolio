import { createTheme } from '@mui/material/styles';

const colors = {
    purple: {
        DEFAULT: '#7C3AED',
        '100': '#A78BFA',
        '200': '#9C77F7',
        '300': '#9263F4',
        '400': '#874EF0',
        '500': '#7C3AED',
        '600': '#7434DF',
        '700': '#6C2ED2',
        '800': '#6327C4',
        '900': '#5B21B6',
    },
    orange: {
        DEFAULT: '#F97316',
        '100': '#FB923C',
        '200': '#FB8A33',
        '300': '#FA8329',
        '400': '#874EF0',
        '500': '#FA7B20',
        '600': '#F56C14',
        '700': '#F26611',
        '800': '#EE5F0F',
        '900': '#EA580C',
    }
};


const baseThemeConfig = {
    shape: {
        borderRadius: 4,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440,
        }
    },
    typography: {
        fontFamily: '"Manrope", "Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: 'Poppins',
            fontSize: '1.875rem', // 30px on mobile
            fontWeight: 700,
            '@media (min-width:768px)': {
                fontSize: '2.25rem', // 36px on md+
            },
        },
        h2: {
            fontFamily: 'Poppins',
            fontSize: '1.5rem', // 24px on mobile
            fontWeight: 700,
            '@media (min-width:768px)': {
                fontSize: '1.875rem', // 30px on md+
            },
        },
        h3: {
            fontFamily: 'Poppins',
            fontSize: '1.25rem', // 20px on mobile
            fontWeight: 700,
            '@media (min-width:768px)': {
                fontSize: '1.5rem', // 24px on md+
            },
        },
        h4: {
            fontFamily: 'Poppins',
            fontSize: '1.125rem', // 18px
            fontWeight: 700,
            '@media (min-width:768px)': {
                fontSize: '1.25rem', // 20px on md+
            },
        },
        h5: {
            fontFamily: 'Poppins',
            fontSize: '1rem', // 16px
            fontWeight: 600,
        },
        h6: {
            fontFamily: 'Poppins',
            fontSize: '0.875rem', // 14px
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.33,
        },
    },
};

export const darkTheme = createTheme({
    ...baseThemeConfig,
    palette: {
        mode: 'dark',
        primary: {
            main: '#A78BFA',
            light: '#C4B5FD',
            dark: '#8B5CF6',
            contrastText: '#0F172A',
        },
        secondary: {
            main: '#FB923C',
            light: '#FCD9BD',
            dark: '#F97316',
            contrastText: '#0F172A',
        },
        background: {
            default: '#0F172A',
            paper: '#1E293B',
        },
        text: {
            primary: '#F1F5F9',
            secondary: '#CBD5E1',
            disabled: '#64748B',
        },
        divider: '#334155',
    },
});

export const lightTheme = createTheme({
    ...baseThemeConfig,
    palette: {
        mode: 'light',
        primary: {
            main: '#7C3AED',
            light: '#A78BFA',
            dark: '#5B21B6',
            contrastText: '#fff',
        },
        secondary: {
            main: '#F97316',
            light: '#FB923C',
            dark: '#EA580C',
            contrastText: '#fff',
        },
        background: {
            default: '#FAFAFA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1F2937',
            secondary: '#6B7280',
            disabled: '#9CA3AF',
        },
        divider: '#E5E7EB',
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        purple: typeof colors.purple;
        orange: typeof colors.orange;
        // gold: typeof colors.gold;
    }
    interface PaletteOptions {
        purple?: typeof colors.purple;
        orange?: typeof colors.orange;
        // gold?: typeof colors.gold;
    }
}
