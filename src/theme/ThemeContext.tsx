
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme';

interface ThemeContextType {
	isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
	const [isDarkMode, setIsDarkMode] = useState(
		typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
		
		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	}, []);

	return (
		<MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<ThemeContext.Provider value={{ isDarkMode }}>
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