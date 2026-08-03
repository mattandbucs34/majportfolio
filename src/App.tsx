import './App.css';
import { Routes, Route } from 'react-router';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import NodeProjects from './pages/node-projects';
import ReactProjects from './pages/react-projects';
import PHPProjects from './pages/php-projects';
import OtherProjects from './pages/other-projects';
import Navbar from '@/components/layout/Navbar';
import Skills from '@/pages/Skills';
import Box from '@mui/material/Box';
import NextJSProjects from '@/pages/NextJS';

function App() {
  return (
    <Box className={'container'} sx={{ width: '100%', maxWidth: 1200, mx: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component={'main'} sx={{ flexGrow: 1, width: '100%' }}>
        <Routes>
          <Route index path={'/'} element={<Home />} />
          <Route path={'/resume'} element={<Resume />} />
          <Route path={'/nextjs_projects'} element={<NextJSProjects />} />
          <Route path={'/react_projects'} element={<ReactProjects />} />
          <Route path={'/node_express'} element={<NodeProjects />} />
          <Route path={'/php_projects'} element={<PHPProjects />} />
          <Route path={'/other_projects'} element={<OtherProjects />} />
          <Route path={'/skills'} element={<Skills />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;