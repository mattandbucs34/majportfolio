import { Box, Typography, Container, useTheme, Paper } from '@mui/material';
import SEO from '../../components/common/SEO';

const skills = [
    'React', 'Next.js', 'Node.js', 'Python', 'Django',
    'JavaScript (ES6+)', 'TypeScript', 'C#', 'Java',
    'PostgreSQL', 'NoSQL', 'HTML', 'CSS', 'Bootstrap',
    'Material-UI', 'Tailwind CSS', 'Git', 'GitHub',
    'GitHub Actions', 'GitLab', 'Docker',
    'AWS (S3, EC2, Lightsail)', 'CI/CD', 'Jenkins',
    'Jira', 'Figma'
];

const SkillsPage = () => {
    const theme = useTheme();

    return (
        <Container maxWidth='lg' sx={{ py: 6 }}>
            <SEO 
                title='Skills' 
                description='A comprehensive list of technical skills and technologies including React, Python, Django, AWS, and more.' 
            />
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant='h2' component='h1' gutterBottom sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
                    Skills & Technologies
                </Typography>
                <Box sx={{ width: 80, height: 4, bgcolor: theme.palette.secondary.main, mx: 'auto', borderRadius: 2 }} />
            </Box>

            <Box 
                sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { 
                        xs: '1fr', 
                        sm: 'repeat(2, 1fr)', 
                        md: 'repeat(4, 1fr)' 
                    }, 
                    gap: 2 
                }}
            >
                {skills.map((skill, index) => (
                    <Paper 
                        key={index}
                        elevation={0}
                        sx={{ 
                            p: 2, 
                            textAlign: 'center',
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 2,
                            bgcolor: 'background.paper',
                            transition: 'all 0.2s',
                            '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                borderColor: theme.palette.secondary.main
                            }
                        }}
                    >
                        <Typography variant='body1' sx={{ fontWeight: 500 }}>
                            {skill}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
};

export default SkillsPage;

