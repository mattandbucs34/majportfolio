import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import { NavLink } from 'react-router';
import { RESUME_S3_URL, LINKEDIN_URL, GITHUB_URL } from '@/utils/constants';

const DRAWER_WIDTH = 280;

type MobileNavProps = {
  isMobileMenuOpen: boolean;
  handleDrawerToggle: () => void;
};

const MobileNav = ({ isMobileMenuOpen, handleDrawerToggle }: MobileNavProps) => {
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
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, p: 2 },
        }}
      >
        <Stack spacing={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 800, mt: 1 }}>
            {'Matthew A. Johnson'}
          </Typography>
          <Typography variant={'body2'} color={'text.secondary'}>
            {'Senior Full-Stack Developer'}
          </Typography>

          <Divider />

          <List sx={{ py: 0 }}>
            <ListItem sx={{ px: 0 }}>
              <Link
                component={NavLink}
                to={'/'}
                underline={'none'}
                color={'inherit'}
                onClick={handleDrawerToggle}
                sx={{ width: '100%', py: 1 }}
              >
                <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                  {'Home'}
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <Link
                href={'/#featured-projects'}
                underline={'none'}
                color={'inherit'}
                onClick={handleDrawerToggle}
                sx={{ width: '100%', py: 1 }}
              >
                <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                  {'Featured Projects'}
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <Link
                href={'/#experience-timeline'}
                underline={'none'}
                color={'inherit'}
                onClick={handleDrawerToggle}
                sx={{ width: '100%', py: 1 }}
              >
                <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                  {'Experience'}
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <Link
                component={NavLink}
                to={'/resume'}
                underline={'none'}
                color={'inherit'}
                onClick={handleDrawerToggle}
                sx={{ width: '100%', py: 1 }}
              >
                <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                  {'Resume'}
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ px: 0 }}>
              <Link
                component={NavLink}
                to={'/skills'}
                underline={'none'}
                color={'inherit'}
                onClick={handleDrawerToggle}
                sx={{ width: '100%', py: 1 }}
              >
                <Typography variant={'body1'} sx={{ fontWeight: 600 }}>
                  {'Skills'}
                </Typography>
              </Link>
            </ListItem>
          </List>

          <Divider />

          <Stack spacing={1.5} sx={{ pt: 1 }}>
            <Button
              variant={'contained'}
              color={'primary'}
              fullWidth
              href={RESUME_S3_URL}
              target={'_blank'}
              rel={'noreferrer'}
              startIcon={<DownloadIcon />}
              sx={{
                fontWeight: 700,
              }}
            >
              {'Download Resume'}
            </Button>

            <Button
              variant={'outlined'}
              color={'primary'}
              fullWidth
              href={LINKEDIN_URL}
              target={'_blank'}
              rel={'noreferrer'}
              sx={{ fontWeight: 600 }}
            >
              {'LinkedIn Profile'}
            </Button>

            <Button
              variant={'text'}
              fullWidth
              href={GITHUB_URL}
              target={'_blank'}
              rel={'noreferrer'}
              sx={{ fontWeight: 600 }}
            >
              {'GitHub Repositories'}
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </nav>
  );
};

export default MobileNav;
