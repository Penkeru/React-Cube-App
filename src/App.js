import logo from './assets/logo.svg'
import SideMenu from './components/side-menu/sideMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import MainRoutes from './mainRoutes';

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-logo-container">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <div className="app-header-title">3D Box Application</div>
      </div>
      <div className="app-content">
        <Router>
          <>
            <div className="app-menu-container">
              <SideMenu />
            </div>
            <div className="app-menu-routes-content">
              <MainRoutes />
            </div>
          </>
        </Router>
      </div>
    </div>
  );
}

export default App;
