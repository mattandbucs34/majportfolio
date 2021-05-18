import './majportfolio.css';
// import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import NodeProjects from './projects/NodeProjects/NodeProjects';
import ReactProjects from './projects/ReactProjects/ReactProjects';
import PHPProjects from './projects/PHPProjects/PHPProjects';
import OtherProjects from './projects/OtherProjects/OtherProjects';

function App() {
  // const containerRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  // const screenWidth: number = containerRef.current?.getBoundingClientRect()?.width as number;
  const screenWidth: number = window.screen.width;
  return (
    <div className="container">
      <Router>
        <Header screenWidth={screenWidth} />
          <main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/node_express">
              <NodeProjects />
            </Route>
            <Route path="/react_projects">
              <ReactProjects />
            </Route>
            <Route path="/php_projects">
              <PHPProjects />
            </Route>
            <Route path="/other_projects" >
              <OtherProjects />
            </Route>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
