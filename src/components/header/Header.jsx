import React, { useState } from "react";
import './Header.scss';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import NO_USER from '../../assets/no-user.jpg'
import LOGO from '../../assets/logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import LOGOUT from '../../assets/images/logout.png';
import { MENU_ITEMS } from "../../constants/MenuItems";




const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visibleRight, setVisibleRight] = useState(false);
    const currentUser = localStorage.getItem('currentUser')
    const rightContents = () => {
        return (
            <>
                {(location.pathname === '/' || location.pathname === '/new-user-home') && currentUser && <div className="menu-items">
                    {/* <Button label="Home" className="p-button-outlined mr-4" /> */}
                    <Button label="Contact Us" className="p-button-outlined mr-4" />
                    <img src={NO_USER} alt="no user" className="profile-pic" />
                </div>}
                {(location.pathname !== '/' && location.pathname !== '/new-user-home' && location.pathname !== '/otp-existing-user') && currentUser && <Button label="Go to Home" aria-label="Submit" onClick={() => { navigate('/') }} />}

                {location.pathname !== '/login' && <div className="menu-bar">
                    <i className="pi pi-bars ml-3" onClick={() => setVisibleRight(true)}></i>
                    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                        {MENU_ITEMS.map((item, index) => <div key={index} className={`flex align-items-center cursor-pointer menu-item ${location.pathname === item.path ? " menu-item-active" : ""}`}
                            onClick={() => { navigate(item.path); setVisibleRight(false); }}>
                            <img src={item.icon} alt={item.label} className="mr-2" />
                            {item.label}
                        </div >)}
                        <div className='flex align-items-center cursor-pointer menu-item ' onClick={() => { localStorage.clear(); setVisibleRight(false); navigate('/login'); }}>
                            <img src={LOGOUT} alt="logout" className="mr-2" />
                            Logout
                        </div >
                    </Sidebar>
                </div>}
            </>
        )
    }
    const leftContents = () => {
        return (
            <React.Fragment>
                <img src={LOGO} alt="logo" />
            </React.Fragment>
        )
    }
    return (
        <Toolbar left={leftContents} right={rightContents} />
    )
}

export default Header;