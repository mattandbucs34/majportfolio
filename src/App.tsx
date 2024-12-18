import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import NodeProjects from './pages/node-projects';
import ReactProjects from './pages/react-projects';
import PHPProjects from './pages/php-projects';
import OtherProjects from './pages/other-projects';

function App() {
  const screenWidth: number = window.screen.width;
  console.log('Doing something!');
  return (
    <div className="container">
      <Header screenWidth={screenWidth} />
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