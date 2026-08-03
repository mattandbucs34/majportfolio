import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import { RESUME_S3_URL, LINKEDIN_URL } from '@/utils/constants';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component={'section'}
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={'lg'}>
        <Stack
          direction={{ xs: 'column-reverse', lg: 'row' }}
          spacing={{ xs: 4, lg: 8 }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' }, width: '100%' }}>
            <Stack
              direction={'row'}
              spacing={1.5}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              flexWrap={'wrap'}
              gap={1}
              sx={{ mb: 2.5 }}
            >
              <Chip
                label={'Senior Full-Stack Developer'}
                size={'small'}
                color={'primary'}
                sx={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  px: 1,
                }}
              />
              <Chip
                label={'NCAA DI Umpire'}
                size={'small'}
                color={'secondary'}
                variant={'outlined'}
                sx={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  px: 1,
                }}
              />
            </Stack>

            <Typography
              variant={'h1'}
              component={'h1'}
              gutterBottom
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.15,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              {'Matthew A. Johnson'}
            </Typography>

            <Typography
              variant={'h4'}
              component={'h2'}
              color={'text.secondary'}
              sx={{
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: { xs: '100%', lg: 620 },
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              {
                '7+ years of experience engineering high-performance web applications with React, Next.js, and Python—backed by corporate finance expertise and high-pressure decision making.'
              }
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              alignItems={'center'}
            >
              <Button
                variant={'contained'}
                size={'large'}
                color={'primary'}
                href={'#featured-projects'}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.5,
                  fontSize: '1rem',
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
                }}
              >
                {'Explore Flagship Projects'}
              </Button>

              <Button
                variant={'outlined'}
                size={'large'}
                color={'primary'}
                href={RESUME_S3_URL}
                target={'_blank'}
                rel={'noreferrer'}
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: 700,
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                {'Download Resume'}
              </Button>

              <Button
                variant={'text'}
                size={'large'}
                color={'secondary'}
                href={LINKEDIN_URL}
                target={'_blank'}
                rel={'noreferrer'}
                startIcon={<LinkedInIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                {'LinkedIn'}
              </Button>
            </Stack>
          </Box>

          <Box sx={{ position: 'relative', flexShrink: 0 }}>
            <Avatar
              alt={'Matthew A. Johnson'}
              src={'/profile.png'}
              sx={{
                width: { xs: 180, sm: 240, md: 280, lg: 320 },
                height: { xs: 180, sm: 240, md: 280, lg: 320 },
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
