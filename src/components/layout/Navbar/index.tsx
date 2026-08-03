import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router';
import MobileNav from '@/components/layout/Navbar/MobileNav';
import { RESUME_S3_URL, LINKEDIN_URL, GITHUB_URL } from '@/utils/constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('lg'));

  function handleDrawerToggle() {
    setIsMobileMenuOpen((prevState: boolean) => !prevState);
  }

  return (
    <>
      <AppBar
        position={'sticky'}
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          zIndex: theme.zIndex.appBar,
          width: '100%',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, sm: 3, md: 4 },
            py: 1,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Left: Brand Logo & Title */}
          <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
            <IconButton
              color={'inherit'}
              aria-label={'open drawer'}
              edge={'start'}
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, color: theme.palette.text.primary, mr: 0.5 }}
            >
              <MenuIcon />
            </IconButton>

            <Link component={NavLink} to={'/'} underline={'none'}>
              <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
                <AvatarLogo />
                <Typography
                  variant={isTabletOrMobile ? 'h5' : 'h4'}
                  component={'span'}
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {'Matthew A. Johnson'}
                </Typography>
              </Stack>
            </Link>
          </Stack>

          {/* Right: Clean Navigation Links & Resume Action (Desktop Only) */}
          <Stack
            direction={'row'}
            spacing={1.5}
            alignItems={'center'}
            display={{ xs: 'none', lg: 'flex' }}
          >
            <Button
              href={'/#featured-projects'}
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 1.5,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              {'Projects'}
            </Button>

            <Button
              href={'/#experience-timeline'}
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 1.5,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              {'Experience'}
            </Button>

            <Button
              href={'/#skills-grid'}
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 1.5,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              {'Skills'}
            </Button>

            <Divider orientation={'vertical'} flexItem sx={{ mx: 1, my: 1 }} />

            <IconButton
              href={LINKEDIN_URL}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'LinkedIn Profile'}
              color={'secondary'}
              size={'medium'}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href={GITHUB_URL}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'GitHub Profile'}
              sx={{ color: theme.palette.text.primary }}
              size={'medium'}
            >
              <GitHubIcon />
            </IconButton>

            <Button
              variant={'contained'}
              color={'primary'}
              size={'small'}
              href={RESUME_S3_URL}
              target={'_blank'}
              rel={'noreferrer'}
              startIcon={<DownloadIcon />}
              sx={{
                fontWeight: 700,
                ml: 1,
                px: 2,
                py: 0.8,
                whiteSpace: 'nowrap',
              }}
            >
              {'Resume'}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

const AvatarLogo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        bgcolor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: '0.9rem',
        boxShadow: '0 2px 6px rgba(79, 70, 229, 0.3)',
      }}
    >
      {'MJ'}
    </Box>
  );
};

export default Navbar;
