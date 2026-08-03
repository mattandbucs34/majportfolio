import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import { useTheme } from '@mui/material/styles';
import { EXPERIENCE_ITEMS } from '@/utils/constants';
import { IExperienceItem } from '@/interfaces/IExperience';

const ExperienceTimeline = () => {
  const theme = useTheme();

  const getIcon = (type: IExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return <WorkIcon sx={{ color: '#FFFFFF' }} />;
      case 'education':
        return <SchoolIcon sx={{ color: '#FFFFFF' }} />;
      case 'leadership':
        return <GavelIcon sx={{ color: '#FFFFFF' }} />;
      default:
        return <WorkIcon sx={{ color: '#FFFFFF' }} />;
    }
  };

  return (
    <Box
      component={'section'}
      id={'experience-timeline'}
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
        borderBottom: `1px solid ${theme.palette.divider}`,
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
            {'Professional Journey & Experience'}
          </Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{ maxWidth: 650, mx: 'auto', mb: 2 }}
          >
            {
              '7+ years of software development experience backed by an analytical foundation in finance & accounting and high-pressure NCAA Division I officiating.'
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

        <Stack spacing={4} sx={{ maxWidth: 850, mx: 'auto' }}>
          {EXPERIENCE_ITEMS.map((item: IExperienceItem) => (
            <Paper
              key={item.id}
              elevation={1}
              sx={{
                p: { xs: 2.5, sm: 4 },
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                borderLeft: `6px solid ${
                  item.type === 'leadership'
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                }`,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                spacing={1.5}
                sx={{ mb: 2 }}
              >
                <Stack direction={'row'} spacing={2} alignItems={'flex-start'}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      flexShrink: 0,
                      bgcolor:
                        item.type === 'leadership'
                          ? theme.palette.secondary.main
                          : theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 0.5,
                    }}
                  >
                    {getIcon(item.type)}
                  </Box>
                  <Box>
                    <Typography
                      variant={'h4'}
                      component={'h3'}
                      sx={{ fontWeight: 700, color: theme.palette.text.primary }}
                    >
                      {item.role}
                    </Typography>
                    <Typography
                      variant={'h6'}
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 700,
                      }}
                    >
                      {item.company}
                    </Typography>
                  </Box>
                </Stack>

                <Chip
                  label={item.period}
                  size={'small'}
                  sx={{
                    fontWeight: 700,
                    bgcolor: theme.palette.action.hover,
                    color: theme.palette.text.primary,
                    maxWidth: '100%',
                    px: 1.5,
                    py: 0.5,
                    alignSelf: { xs: 'flex-start', md: 'auto' },
                    mt: { xs: 1, md: 0 },
                    ml: { xs: 0, sm: '58px', md: 0 },
                  }}
                />
              </Stack>

              <Box sx={{ pl: { xs: 0, sm: 7 } }}>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  {item.description.map((desc: string, descIdx: number) => (
                    <Typography
                      key={descIdx}
                      variant={'body1'}
                      color={'text.secondary'}
                    >
                      {`• ${desc}`}
                    </Typography>
                  ))}
                </Stack>

                {item.skills && item.skills.length > 0 && (
                  <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                    {item.skills.map((skill: string, skillIdx: number) => (
                      <Chip
                        key={skillIdx}
                        label={skill}
                        size={'small'}
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          bgcolor: theme.palette.action.selected,
                          color: theme.palette.text.primary,
                        }}
                      />
                    ))}
                  </Stack>
                )}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ExperienceTimeline;
