import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router';

const DRAWER_WIDTH = 240;

type MobileNavProps = {
	isMobileMenuOpen: boolean;
	handleDrawerToggle: () => void;
};

const MobileNav = ({ isMobileMenuOpen, handleDrawerToggle }: MobileNavProps) => {
	const theme = useTheme();
	return (
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
												to={'/nextjs_projects'}
												underline={'none'}
												color={theme.palette.primary.main}
												onClick={handleDrawerToggle}
											>
												<Typography>NextJS</Typography>
											</Link>
										</ListItem>
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
						{/* <ListItem>
							<Link
								component={NavLink}
								to={'/contact'}
								underline={'none'}
								color={theme.palette.primary.main}
								onClick={handleDrawerToggle}
							>
								<Typography>Contact</Typography>
							</Link>
						</ListItem> */}
					</List>
				</Stack>
			</Drawer>
		</nav>
	);
};

export default MobileNav;
