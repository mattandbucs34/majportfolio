import { Box, Card, CardContent, CardMedia, CardActionArea, Typography, Container, useTheme } from '@mui/material';
import SEO from '../../components/common/SEO';
import { IProjectType } from '../../interfaces/IProjects';
import { node_projects } from '../helpers/node_projects';

const NodeProjects = () => {
  const theme = useTheme();

  function displayProjects() {
    return (
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)' 
          }, 
          gap: 4 
        }}
      >
        {node_projects.map((project: IProjectType, index: number) => (
          <Card key={index}>
            <CardActionArea href={project.href} target="_blank" rel="noreferrer">
              <CardMedia
                component="img"
                height="200"
                image={project.imagePath}
                alt={project.alt}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                  {project.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View Project
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <SEO 
        title="Node.js Projects" 
        description="Backend and full-stack projects built using Node.js, Express, and modern server-side technologies." 
      />
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
          Node.js and Express Projects
        </Typography>
        <Box sx={{ width: 80, height: 4, bgcolor: theme.palette.secondary.main, mx: 'auto', borderRadius: 2 }} />
      </Box>
      {displayProjects()}
    </Container>
  );
};

export default NodeProjects;
