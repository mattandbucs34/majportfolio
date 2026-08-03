import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import SEO from '@/components/common/SEO';
import { RESUME_S3_URL, LINKEDIN_URL, EMAIL_ADDRESS, EXPERIENCE_ITEMS, SKILL_GROUPS } from '@/utils/constants';
import { IExperienceItem } from '@/interfaces/IExperience';
import { ISkillGroup } from '@/interfaces/ISkills';

const Resume = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={'lg'} sx={{ py: 6 }}>
      <SEO
        title={'Resume | Matthew A. Johnson'}
        description={
          'Interactive resume for Matthew A. Johnson, Senior Full-Stack Software Developer. View career experience, skills matrix, and download PDF from AWS S3.'
        }
      />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        sx={{ mb: 6 }}
      >
        <Box>
          <Typography
            variant={'h2'}
            component={'h1'}
            gutterBottom
            sx={{ fontWeight: 800, color: theme.palette.primary.main }}
          >
            {'Resume & Experience'}
          </Typography>
          <Typography variant={'body1'} color={'text.secondary'}>
            {'Senior Full-Stack Software Developer | React, Next.js & Python'}
          </Typography>
        </Box>

        <Stack direction={'row'} spacing={2}>
          <Button
            variant={'contained'}
            color={'primary'}
            size={'large'}
            href={RESUME_S3_URL}
            target={'_blank'}
            rel={'noreferrer'}
            startIcon={<DownloadIcon />}
            sx={{
              fontWeight: 700,
              px: 3,
            }}
          >
            {'Download Resume'}
          </Button>

          <Button
            variant={'outlined'}
            color={'primary'}
            size={'large'}
            href={LINKEDIN_URL}
            target={'_blank'}
            rel={'noreferrer'}
            startIcon={<LinkedInIcon />}
            sx={{ fontWeight: 600 }}
          >
            {'LinkedIn'}
          </Button>
        </Stack>
      </Stack>

      <Paper
        elevation={1}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          bgcolor: 'background.paper',
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        {/* Header summary */}
        <Box sx={{ mb: 4 }}>
          <Typography variant={'h3'} component={'h2'} sx={{ fontWeight: 800, mb: 1, color: theme.palette.text.primary }}>
            {'Matthew A. Johnson'}
          </Typography>
          <Typography variant={'h6'} color={'secondary.main'} sx={{ fontWeight: 700, mb: 2 }}>
            {'Senior Software Developer @ U.S. News & World Report'}
          </Typography>

          <Typography variant={'body1'} paragraph color={'text.secondary'}>
            {
              'Senior Software Developer with 7+ years of experience specializing in frontend development with React and Next.js, complemented by strong backend expertise in Python, Django, and PostgreSQL. Proven track record building high-traffic, scalable production applications.'
            }
          </Typography>

          <Typography variant={'body1'} paragraph color={'text.secondary'}>
            {
              'Prior background in corporate finance and accounting as an assistant controller sharpens analytical systems design and data rigor. NCAA Division I softball umpire demonstrating composure and decisive leadership under high pressure.'
            }
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Experience section */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant={'h4'}
            component={'h3'}
            gutterBottom
            sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 3 }}
          >
            {'Work Experience'}
          </Typography>

          <Stack spacing={4}>
            {EXPERIENCE_ITEMS.map((item: IExperienceItem) => (
              <Box key={item.id}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent={'space-between'}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  sx={{ mb: 1 }}
                >
                  <Typography variant={'h5'} sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    {`${item.role} `}
                    <Box component={'span'} sx={{ color: theme.palette.secondary.main }}>
                      {`— ${item.company}`}
                    </Box>
                  </Typography>
                  <Chip label={item.period} size={'small'} sx={{ fontWeight: 600 }} />
                </Stack>

                <Stack spacing={0.5} sx={{ pl: 2, mt: 1 }}>
                  {item.description.map((desc: string, idx: number) => (
                    <Typography key={idx} variant={'body1'} color={'text.secondary'}>
                      {`• ${desc}`}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills section */}
        <Box>
          <Typography
            variant={'h4'}
            component={'h3'}
            gutterBottom
            sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 3 }}
          >
            {'Technical Core Skills'}
          </Typography>

          <Stack spacing={3}>
            {SKILL_GROUPS.map((group: ISkillGroup, idx: number) => (
              <Box key={idx}>
                <Typography variant={'h6'} sx={{ fontWeight: 700, mb: 1, color: theme.palette.text.primary }}>
                  {group.category}
                </Typography>
                <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                  {group.skills.map((skill: { name: string }, sIdx: number) => (
                    <Chip
                      key={sIdx}
                      label={skill.name}
                      variant={'outlined'}
                      color={'primary'}
                      sx={{ fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Paper>

      {/* Direct Contact Banner */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant={'body1'} color={'text.secondary'} sx={{ mb: 2 }}>
          {'Interested in collaborating or discussing technical roles?'}
        </Typography>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          href={EMAIL_ADDRESS}
          startIcon={<EmailIcon />}
          sx={{ fontWeight: 700, px: 4 }}
        >
          {'Get in Touch'}
        </Button>
      </Box>
    </Container>
  );
};

export default Resume;
