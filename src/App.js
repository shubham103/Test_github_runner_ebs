import React, { useEffect } from 'react';
import './App.css';
import Routing from './routing/Routing';
import Header from './components/header/Header';
import SideMenu from './components/sideMenu/SideMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let currentUser = localStorage.getItem('currentUser');

  useEffect(() => {

    if (!currentUser) {
      navigate('/login');
    }
  }, [localStorage.getItem('currentUser')]);

  return (
    <>
      {currentUser ? <div className='app-fluid'>
        <Header />
        {(location.pathname !== '/' && location.pathname !== '/new-user-home' && location.pathname !== '/otp-existing-user') && <div className='side-menu'>
          <SideMenu />
        </div>}
        <div className='container relative'>
          <div className={(location.pathname !== '/' && location.pathname !== '/new-user-home' && location.pathname !== '/otp-existing-user') ? "routing-container" : 'routing-container-full'}>
            <Routing />
          </div>
        </div>
      </div> : <div className='app'>
        <Header />
        <div className='container'>
          <div className='routing-container-full'>
            <Routing />
          </div>
        </div>
      </div>}
    </>
  );
}

export default App;
