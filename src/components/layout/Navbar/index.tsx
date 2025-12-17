
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DRAWER_WIDTH = 240;

const Navbar = () => {
	const [isProjectsMenuOpen, setIsProjectsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const projectsButtonRef = React.useRef<HTMLButtonElement | null>(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(769));

	function handleDrawerToggle() {
		setIsMobileMenuOpen(prevState => !prevState);
	}

	return (
		<>
			<AppBar position={'sticky'}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Stack direction={'row'} spacing={2} alignItems={'center'} flexGrow={1}>
						<img
							src={'/jamzone_logo.png'}
							alt={'Jamzone Logo'}
							style={{ height: '100%', maxHeight: '4rem' }}
						/>
						<Typography component={'h2'} variant={isMobile ? 'h3' : 'h2'} flexGrow={1}>
							Matthew A Johnson Portfolio
						</Typography>
					</Stack>
					<Stack direction={'row'} spacing={2} display={{ xs: 'none', md: 'flex' }}>
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
			<nav>
				<Drawer
					anchor={'left'}
					variant={'temporary'}
					open={isMobileMenuOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', md: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
					}}
				>
					<Stack sx={{ textAlign: 'center' }}>
						<Typography variant={'h4'} my={2}>MAJ Portfolio</Typography>
						<Divider sx={{ borderColor: 'white' }} />
						<List>
							<ListItem>
								<Link
									component={NavLink}
									to={'/'}
									underline={'none'}
									color={theme.palette.primary.main}
									onClick={handleDrawerToggle}
								>
									<Typography>Home</Typography>
								</Link>
							</ListItem>
							<ListItem
								sx={{ p: 0, '& h3': { width: '100%' } }}
								component={Accordion}
							>
								{/* <ListItemButton>
									<Typography>Skills</Typography>
								</ListItemButton> */}
								<Accordion square >
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls={'panel1a-content'}
										id={'panel1a-header'}
									>
										<Typography color={theme.palette.primary.main}>Projects</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<List>
											<ListItem>
												<Link
													component={NavLink}
													to={'/react_projects'}
													underline={'none'}
													color={theme.palette.primary.main}
													onClick={handleDrawerToggle}
												>
													<Typography>React</Typography>
												</Link>
											</ListItem>
											<ListItem>
												<Link
													component={NavLink}
													to={'/php_projects'}
													underline={'none'}
													color={theme.palette.primary.main}
													onClick={handleDrawerToggle}
												>
													<Typography>PHP</Typography>
												</Link>
											</ListItem>
											<ListItem>
												<Link
													component={NavLink}
													to={'/node_express'}
													underline={'none'}
													color={theme.palette.primary.main}
													onClick={handleDrawerToggle}
												>
													<Typography>Node.js and Express</Typography>
												</Link>
											</ListItem>
											<ListItem>
												<Link
													component={NavLink}
													to={'/other_projects'}
													underline={'none'}
													color={theme.palette.primary.main}
													onClick={handleDrawerToggle}
												>
													<Typography>Other</Typography>
												</Link>
											</ListItem>
										</List>
									</AccordionDetails>
								</Accordion>
							</ListItem>
							<ListItem>
								<Link
									component={NavLink}
									to={'/skills'}
									underline={'none'}
									color={theme.palette.primary.main}
									onClick={handleDrawerToggle}
								>
									<Typography>Skills</Typography>
								</Link>
							</ListItem>
							<ListItem>
								<Link
									component={NavLink}
									to={'/contact'}
									underline={'none'}
									color={theme.palette.primary.main}
									onClick={handleDrawerToggle}
								>
									<Typography>Contact</Typography>
								</Link>
							</ListItem>
						</List>
					</Stack>
				</Drawer>
			</nav>
		</>
	);
};

export default Navbar;
