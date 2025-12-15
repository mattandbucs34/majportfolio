
'use client';

import { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme';

interface ThemeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ||
		localStorage.getItem('theme-mode') === 'dark'
	);

	const toggleDarkMode = (): void => {
		setIsDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem('theme-mode', newMode ? 'dark' : 'light');
			return newMode;
		});
	};

	return (
		<MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
				{children}
			</ThemeContext.Provider>
		</MuiThemeProvider>
	);
}

export function useTheme(): ThemeContextType {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}