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
        '200': '#F98B36',
        '300': '#F78430',
        '400': '#F57C2A',
        '500': '#F37524',
        '600': '#F06E1E',
        '700': '#EE6718',
        '800': '#EC5F12',
        '900': '#EA580C',
    },
    deepPurple: {
        '500': '#4e1b9e',
        '600': '#411686',
        '700': '#35106f',
        '800': '#290b59',
        '900': '#1e0644',
    },
    orangeBronze: {
        '500': '#cb4b09',
        '600': '#ae3f06',
        '700': '#913304',
        '800': '#752803',
        '900': '#5a1d02',
    }
};

const gradients = {
    // Simple 2-stop gradients (faster, cleaner)
    primary: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)',
    purple: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    orange: 'linear-gradient(135deg, #FB923C 0%, #F97316 100%)',
    subtle: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',

    deepPrimary: 'linear-gradient(135deg, #35106f 30%, #F78430 100%)',
    deepSecondary: 'linear-gradient(135deg, #ae3f06 0%, #A78BFA 100%)',

    // Multi-stop gradient (smooth, rich blend)
    purpleOrangeBlend: 'linear-gradient(135deg, #5B21B6 0%, #90478D 33%, #C66C65 66%, #FB923C 100%)',

    // Alternative - same colors, different angle
    purpleOrangeBlendHorizontal: 'linear-gradient(90deg, #35106f 0%, #90478D 33%, #C66C65 66%, #FB923C 100%)',
};


const baseThemeConfig = {
    shape: {
        borderRadius: 6,
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
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
};

export const darkTheme = createTheme({
    ...baseThemeConfig,
    gradients,
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
    gradients,
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
        deepPurple: typeof colors.deepPurple;
        orangeBronze: typeof colors.orangeBronze;
    }
    interface PaletteOptions {
        purple?: typeof colors.purple;
        orange?: typeof colors.orange;
        deepPurple?: typeof colors.deepPurple;
        orangeBronze?: typeof colors.orangeBronze;
    }

    interface Theme {
        gradients: {
            primary: string;
            purple: string;
            orange: string;
            subtle: string;
            deepPrimary: string;
            deepSecondary: string;
            purpleOrangeBlend: string;
            purpleOrangeBlendHorizontal: string;
        };
    }

    interface ThemeOptions {
        gradients: {
            primary: string;
            purple: string;
            orange: string;
            subtle: string;
            deepPrimary: string;
            deepSecondary: string;
            purpleOrangeBlend: string;
            purpleOrangeBlendHorizontal: string;
        };
    }
}
