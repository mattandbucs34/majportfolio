import './App.css';
import { Routes, Route } from 'react-router';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import NodeProjects from './pages/node-projects';
import ReactProjects from './pages/react-projects';
import PHPProjects from './pages/php-projects';
import OtherProjects from './pages/other-projects';
import Navbar from '@/components/layout/Navbar';

function App() {
  return (
    <div className={'container h-full font-global'}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/node_express" element={<NodeProjects />} />
        <Route path="/react_projects" element={<ReactProjects />} />
        <Route path="/php_projects" element={<PHPProjects />} />
        <Route path="/other_projects" element={<OtherProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;