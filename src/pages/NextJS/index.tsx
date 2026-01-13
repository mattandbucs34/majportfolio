import SEO from '@/components/common/SEO';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const NextJSProjects = () => {
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
                <Card>
                    <CardActionArea href={'https://totalofficiating.org'} target='_blank' rel='noreferrer'>
                        <CardMedia
                            component='img'
                            height='200'
                            image={'/totalofficiating.png'}
                            alt={'Total Officiating'}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 700 }}>
                                {'Total Officiating'}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                View Project
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea href={'https://rightcallumpires.org'} target='_blank' rel='noreferrer'>
                        <CardMedia
                            component='img'
                            height='200'
                            image={'/rightcallumpires.png'}
                            alt={'Right Call Umpires'}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 700 }}>
                                {'Right Call Umpires'}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                View Project
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        );
    }
    return (
        <Container maxWidth='lg' sx={{ py: 6 }}>
            <SEO
                title='NextJS Projects'
                description='Web applications and projects developed using NextJS, showcasing server-side scripting and dynamic content management.'
            />
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant='h2' component='h1' gutterBottom sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
                    NextJS Projects
                </Typography>
                <Box sx={{ width: 80, height: 4, bgcolor: theme.palette.secondary.main, mx: 'auto', borderRadius: 2 }} />
            </Box>
            {displayProjects()}
        </Container>
    );
};

export default NextJSProjects;
