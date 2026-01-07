import './App.css';
import { Routes, Route } from 'react-router';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import NodeProjects from './pages/node-projects';
import ReactProjects from './pages/react-projects';
import PHPProjects from './pages/php-projects';
import OtherProjects from './pages/other-projects';
import Navbar from '@/components/layout/Navbar';
import Skills from '@/pages/Skills';
import Stack from '@mui/material/Stack';
import NextJSProjects from '@/pages/NextJS';

function App() {
  return (
    <Stack height={'100%'} maxHeight={'100%'} className={'container h-full font-global'}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/node_express" element={<NodeProjects />} />
        <Route path="/react_projects" element={<ReactProjects />} />
        <Route path="/php_projects" element={<PHPProjects />} />
        <Route path="/other_projects" element={<OtherProjects />} />
        <Route path="/nextjs_projects" element={<NextJSProjects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Stack>
  );
}

export default App;