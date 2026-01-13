import { createTheme } from '@mui/material/styles';

// UT Austin Brand Colors
const brand = {
    purple: {
        main: '#33006F',
        dark: '#2A005C',
        light: '#4A2A7A',
        muted: '#9D7BD8', // For dark mode
    },
    orange: {
        main: '#BF5700',
        dark: '#9C4600',
        light: '#D66B00',
    },
};

export const colors = {
    purple: {
        DEFAULT: brand.purple.main,
        '100': brand.purple.muted,
        '200': '#8B5CF6',
        '300': '#7C3AED',
        '400': '#6B21A8',
        '500': brand.purple.main,
        '600': brand.purple.dark,
        '700': '#250050',
        '800': '#1F0042',
        '900': '#1A0035',
    },
    orange: {
        DEFAULT: brand.orange.main,
        '100': '#FDBA74',
        '200': '#FB923C',
        '300': '#F97316',
        '400': '#EA580C',
        '500': brand.orange.main,
        '600': brand.orange.dark,
        '700': '#853D00',
        '800': '#6E3300',
        '900': '#572900',
    },
    deepPurple: {
        '500': brand.purple.main,
        '600': brand.purple.dark,
        '700': '#250050',
        '800': '#1F0042',
        '900': '#1A0035',
    },
    orangeBronze: {
        '500': brand.orange.main,
        '600': brand.orange.dark,
        '700': '#853D00',
        '800': '#6E3300',
        '900': '#572900',
    }
};

const gradients = {
    // Simple 2-stop gradients (faster, cleaner)
    primary: `linear-gradient(135deg, ${brand.purple.main} 0%, ${brand.orange.main} 100%)`,
    purple: `linear-gradient(135deg, ${brand.purple.muted} 0%, ${brand.purple.main} 100%)`,
    orange: `linear-gradient(135deg, ${brand.orange.light} 0%, ${brand.orange.main} 100%)`,
    subtle: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',

    deepPrimary: `linear-gradient(135deg, ${brand.purple.dark} 30%, ${brand.orange.light} 100%)`,
    deepSecondary: `linear-gradient(135deg, ${brand.orange.dark} 0%, ${brand.purple.muted} 100%)`,

    // Multi-stop gradient (smooth, rich blend) - UT Austin colors
    purpleOrangeBlend: `linear-gradient(135deg, ${brand.purple.main} 0%, #7C3A6F 33%, #A04D33 66%, ${brand.orange.main} 100%)`,

    // Alternative - same colors, different angle
    purpleOrangeBlendHorizontal: `linear-gradient(90deg, ${brand.purple.main} 0%, #7C3A6F 33%, #A04D33 66%, ${brand.orange.main} 100%)`,
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
            fontFamily: 'Manrope',
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
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: `linear-gradient(135deg, ${brand.purple.main} 0%, #7C3A6F 33%, #B4705A  66%, #AC8360 100%)`,
                    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '8px 20px',
                },
                containedPrimary: {
                    background: gradients.primary,
                    '&:hover': {
                        background: gradients.primary,
                        filter: 'brightness(1.1)',
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 48px 0 rgba(31, 38, 135, 0.15)',
                    }
                }
            }
        }
    }
};

export const darkTheme = createTheme({
    ...baseThemeConfig,
    gradients,
    palette: {
        mode: 'dark',
        primary: {
            main: brand.purple.muted, // Softened purple for dark mode
            light: '#B8A0E5',
            dark: '#8B5CF6',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: brand.orange.main,
            light: brand.orange.light,
            dark: brand.orange.dark,
            contrastText: '#FFFFFF',
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
        purple: colors.purple,
        orange: colors.orange,
        deepPurple: colors.deepPurple,
        orangeBronze: colors.orangeBronze,
    },
});

export const lightTheme = createTheme({
    ...baseThemeConfig,
    gradients,
    palette: {
        mode: 'light',
        primary: {
            main: brand.purple.main,
            light: brand.purple.light,
            dark: brand.purple.dark,
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: brand.orange.main,
            light: brand.orange.light,
            dark: brand.orange.dark,
            contrastText: '#FFFFFF',
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
        purple: colors.purple,
        orange: colors.orange,
        deepPurple: colors.deepPurple,
        orangeBronze: colors.orangeBronze,
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
