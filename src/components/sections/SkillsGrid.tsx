import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import { useTheme } from '@mui/material/styles';
import { SKILL_GROUPS } from '@/utils/constants';
import { ISkillGroup } from '@/interfaces/ISkills';

const SkillsGrid = () => {
  const theme = useTheme();

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('frontend')) {
      return <CodeIcon sx={{ color: theme.palette.primary.main }} />;
    } else if (category.toLowerCase().includes('backend')) {
      return <StorageIcon sx={{ color: theme.palette.secondary.main }} />;
    }
    return <BuildIcon sx={{ color: theme.palette.primary.main }} />;
  };

  return (
    <Box
      component={'section'}
      id={'skills-grid'}
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
            sx={{ fontWeight: 800, color: theme.palette.text.primary }}
          >
            {'Technical Core Competencies'}
          </Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{ maxWidth: 650, mx: 'auto', mb: 2 }}
          >
            {
              'Extensive experience building modern web architectures, scalable backends, database integrations, and automated testing suites.'
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

        <Grid container spacing={3}>
          {SKILL_GROUPS.map((group: ISkillGroup, index: number) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Paper
                elevation={1}
                sx={{
                  p: { xs: 3, sm: 4 },
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'background.default',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <Stack direction={'row'} spacing={1.5} alignItems={'center'} sx={{ mb: 3 }}>
                  {getCategoryIcon(group.category)}
                  <Typography variant={'h4'} component={'h3'} sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    {group.category}
                  </Typography>
                </Stack>

                <Stack direction={'row'} flexWrap={'wrap'} gap={1.5}>
                  {group.skills.map((skill: { name: string }, skillIdx: number) => (
                    <Chip
                      key={skillIdx}
                      label={skill.name}
                      variant={'outlined'}
                      color={'primary'}
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        py: 0.5,
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsGrid;
