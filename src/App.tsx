import './App.css';
import { Routes, Route } from 'react-router';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Navbar from '@/components/layout/Navbar';
import Skills from '@/pages/Skills';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box className={'container'} sx={{ width: '100%', maxWidth: 1200, mx: 'auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component={'main'} sx={{ flexGrow: 1, width: '100%' }}>
        <Routes>
          <Route index path={'/'} element={<Home />} />
          <Route path={'/resume'} element={<Resume />} />
          <Route path={'/skills'} element={<Skills />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;