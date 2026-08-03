import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ProjectCard from '@/components/common/ProjectCard';
import { FEATURED_PROJECTS } from '@/utils/constants';
import { IProjectType } from '@/interfaces/IProjects';

const FeaturedProjects = () => {
  const theme = useTheme();

  return (
    <Box
      component={'section'}
      id={'featured-projects'}
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={'lg'}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant={'h2'}
            component={'h2'}
            gutterBottom
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
            }}
          >
            {'Featured Flagship Projects'}
          </Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{ maxWidth: 650, mx: 'auto', mb: 2 }}
          >
            {
              'A showcase of full-stack web applications featuring Next.js 15/16, Payload CMS 3, PostgreSQL, Stripe payments, and AWS S3 storage.'
            }
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: theme.palette.primary.main,
              mx: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={3} alignItems={'stretch'}>
          {FEATURED_PROJECTS.map((project: IProjectType, index: number) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
