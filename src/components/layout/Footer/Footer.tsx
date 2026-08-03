import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material/styles';
import { LINKEDIN_URL, GITHUB_URL, EMAIL_ADDRESS } from '@/utils/constants';

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component={'footer'}
      sx={{
        py: 5,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth={'lg'}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          spacing={2}
        >
          <Typography variant={'body2'} color={'text.secondary'}>
            {`© ${new Date().getFullYear()} Matthew A. Johnson. All rights reserved.`}
          </Typography>

          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <IconButton
              href={LINKEDIN_URL}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'LinkedIn'}
              sx={{
                color: theme.palette.secondary.main,
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href={GITHUB_URL}
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'GitHub'}
              sx={{
                color: theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href={EMAIL_ADDRESS}
              aria-label={'Email'}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': { color: theme.palette.secondary.main },
              }}
            >
              <EmailIcon />
            </IconButton>

            <IconButton
              onClick={scrollToTop}
              aria-label={'Back to top'}
              sx={{
                ml: 1,
                bgcolor: theme.palette.action.hover,
                '&:hover': { bgcolor: theme.palette.action.selected },
              }}
            >
              <ArrowUpwardIcon fontSize={'small'} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
