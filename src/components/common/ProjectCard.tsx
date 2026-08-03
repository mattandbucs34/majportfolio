import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import { IProjectType } from '@/interfaces/IProjects';

interface ProjectCardProps {
  project: IProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component={'img'}
          height={'220'}
          image={project.imagePath}
          alt={project.alt}
          sx={{
            objectFit: 'cover',
          }}
        />
        {project.featured && (
          <Chip
            label={'Featured Flagship'}
            size={'small'}
            color={'primary'}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant={'h4'}
          component={'h3'}
          gutterBottom
          sx={{ fontWeight: 700, color: theme.palette.text.primary }}
        >
          {project.projectName}
        </Typography>

        {project.description && (
          <Typography
            variant={'body2'}
            color={'text.secondary'}
            sx={{ mb: 2, lineHeight: 1.6 }}
          >
            {project.description}
          </Typography>
        )}

        {project.tags && project.tags.length > 0 && (
          <Stack direction={'row'} flexWrap={'wrap'} gap={1} sx={{ mt: 2 }}>
            {project.tags.map((tag: string, index: number) => (
              <Chip
                key={index}
                label={tag}
                size={'small'}
                variant={'outlined'}
                color={'primary'}
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        )}
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'small'}
          href={project.href}
          target={'_blank'}
          rel={'noreferrer'}
          endIcon={<OpenInNewIcon />}
          sx={{
            fontWeight: 700,
            textTransform: 'none',
          }}
        >
          {'View Live'}
        </Button>

        {project.githubUrl && (
          <Button
            variant={'outlined'}
            size={'small'}
            href={project.githubUrl}
            target={'_blank'}
            rel={'noreferrer'}
            startIcon={<GitHubIcon />}
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            {'GitHub'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
