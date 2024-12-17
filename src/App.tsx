import './App.css';
import {Routes, Route} from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import NodeProjects from './projects/NodeProjects/NodeProjects';
import ReactProjects from './projects/ReactProjects/ReactProjects';
import PHPProjects from './projects/PHPProjects/PHPProjects';
import OtherProjects from './projects/OtherProjects/OtherProjects';

function App() {
  const screenWidth: number = window.screen.width;
  console.log('Doing something!')
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