import { Box, Typography, Avatar, Container, useTheme, Stack } from '@mui/material';
import SEO from '../../components/common/SEO';

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <SEO 
        title="Home" 
        description="Software developer with 7 years of experience specializing in React and Python. Currently working at U.S. News & World Report." 
      />
      <Box 
        component="main" 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4,
          alignItems: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Avatar
          alt="Matthew Johnson"
          src="/profile.png"
          sx={{
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            boxShadow: theme.shadows[10],
            border: `4px solid ${theme.palette.secondary.main}`,
          }}
        />
        
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: theme.palette.primary.main,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            A Bit About Me:
          </Typography>
          
          <Stack spacing={2}>
            <Typography variant="body1">
              I am a software developer with 7 years of experience specializing in frontend development with React, complemented by strong backend expertise in Python and Django. My full-stack background allows me to build clean, scalable applications that balance performance, usability, and maintainability.
            </Typography>
            <Typography variant="body1">
              Currently, I work at <b>U.S. News & World Report</b>, where I develop and maintain multiple production applications that deliver feature-driven content to millions of site visitors. Previously, I contributed to modern, scalable learning management software at <b>CPaT Global</b>, working with contemporary frameworks to support a growing user base.
            </Typography>
            <Typography variant="body1">
              Before transitioning into software development, I spent several years in accounting and finance as an assistant controller. That experience sharpened my analytical thinking, attention to detail, and ability to manage complex systems—skills that directly inform how I design and build software today.
            </Typography>
            <Typography variant="body1">
              Outside of tech, I am an NCAA Division I softball umpire, a role that demands adaptability, composure, and fast, decisive thinking. Those same traits guide how I approach problem-solving in development.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              If you are a recruiter seeking a dependable, thoughtful developer—or a client with an idea worth building—I would love to connect. Take a look at my work. I am open to talk!
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
