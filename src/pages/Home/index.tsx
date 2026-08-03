import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';
import SEO from '@/components/common/SEO';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import SkillsGrid from '@/components/sections/SkillsGrid';
import { RESUME_S3_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '@/utils/constants';

const Home = () => {
  const theme = useTheme();

  return (
    <Box component={'main'} sx={{ flexGrow: 1 }}>
      <SEO
        title={'Matthew A. Johnson | Senior Full-Stack Developer'}
        description={
          'Senior software developer with 7+ years of experience specializing in React, Next.js, Python, and Django. Currently working at U.S. News & World Report.'
        }
      />

      <Hero />
      <FeaturedProjects />
      <ExperienceTimeline />
      <SkillsGrid />

      {/* Contact & Resume CTA Section */}
      <Box
        component={'section'}
        id={'contact'}
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: theme.palette.primary.main,
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth={'md'}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: 'center',
              bgcolor: 'rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
            }}
          >
            <Typography variant={'h2'} component={'h2'} gutterBottom sx={{ fontWeight: 800 }}>
              {'Let’s Build Something Exceptional Together'}
            </Typography>

            <Typography variant={'body1'} sx={{ mb: 4, opacity: 0.95, maxWidth: 600, mx: 'auto' }}>
              {
                'Whether you are looking to collaborate on a full-stack Next.js project, discuss software architecture, or explore technical opportunities, I would love to connect.'
              }
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={'center'}
            >
              <Button
                variant={'contained'}
                size={'large'}
                href={EMAIL_ADDRESS}
                startIcon={<EmailIcon />}
                sx={{
                  bgcolor: '#FFFFFF',
                  color: theme.palette.primary.main,
                  fontWeight: 800,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#F1F5F9',
                  },
                }}
              >
                {'Send Email'}
              </Button>

              <Button
                variant={'outlined'}
                size={'large'}
                href={LINKEDIN_URL}
                target={'_blank'}
                rel={'noreferrer'}
                startIcon={<LinkedInIcon />}
                sx={{
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  fontWeight: 700,
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {'LinkedIn'}
              </Button>

              <Button
                variant={'outlined'}
                size={'large'}
                href={RESUME_S3_URL}
                target={'_blank'}
                rel={'noreferrer'}
                startIcon={<DownloadIcon />}
                sx={{
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  fontWeight: 700,
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {'Resume'}
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
