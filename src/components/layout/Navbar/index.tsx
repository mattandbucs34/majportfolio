
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

const Navbar = () => {
	const [isProjectsMenuOpen, setIsProjectsMenuOpen] = React.useState(false);
	const projectsButtonRef = React.useRef<HTMLButtonElement | null>(null);
	const theme = useTheme();

	return (
		<AppBar position={'sticky'}>
			<Toolbar>
				<Typography variant={'h2'} flexGrow={1}>Matthew A Johnson Portfolio</Typography>
				<Stack direction={'row'} spacing={2}>
					<Button>Home</Button>
					<Box>
						<Button
							ref={projectsButtonRef}
							onClick={() => setIsProjectsMenuOpen(true)}
						>
							Projects
						</Button>
						<Menu
							id={'projects-menu'}
							anchorEl={projectsButtonRef.current}
							open={isProjectsMenuOpen}
							onClose={() => setIsProjectsMenuOpen(false)}
							keepMounted
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<MenuItem color={theme.palette.primary.main}>
								<Link
									component={NavLink}
									to={'/react_projects'}
									color={theme.palette.primary.main}
									underline={'none'}
								>
									React
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									component={NavLink}
									to={'/php_projects'}
									color={theme.palette.primary.main}
									underline={'none'}
								>
									PHP
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									component={NavLink}
									to={'/node_express'}
									color={theme.palette.primary.main}
									underline={'none'}
								>
									Node.js and Express
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									component={NavLink}
									to={'/other_projects'}
									color={theme.palette.primary.main}
									underline={'none'}
								>
									Other
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<Button>Skills</Button>
					<Button>Contact</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
