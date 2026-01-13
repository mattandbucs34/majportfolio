import { Box, Typography, IconButton, Container, useTheme, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        mt: 'auto', 
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2}>
            <IconButton 
              href="https://www.linkedin.com/in/mattandbucs" 
              target="_blank" 
              rel="noreferrer"
              color="primary"
              sx={{ '&:hover': { color: theme.palette.secondary.main } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="https://github.com/mattandbucs34" 
              target="_blank" 
              rel="noreferrer"
              color="primary"
              sx={{ '&:hover': { color: theme.palette.secondary.main } }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="mailto:mattandbucs@gmail.com" 
              color="primary"
              sx={{ '&:hover': { color: theme.palette.secondary.main } }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Stack>
          
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} JAM Productions. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
