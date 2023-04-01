import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';
import LOGOUT from '../../assets/images/logout.png';
import NO_USER from '../../assets/images/no-user.png';
// import MENU_DECOR from '../../assets/images/menu_decor.svg';
import WHATSAPP_CARD from '../../assets/images/whatsapp_card.svg';
import REWARDS from '../../assets/images/rewards.svg';
import LOGO from '../../assets/logo.png';
import { MENU_ITEMS } from "../../constants/MenuItems";
import './SideMenu.scss';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


const SideMenu = () => {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const menuItems = currentUser.userType === 'NEW_USER' ? [MENU_ITEMS[0]] : MENU_ITEMS;
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <div className='flex justify-content-center align-items-center '>
                <img src={LOGO} alt="logo" className="mt-4" />
            </div >
            {/* <img src={MENU_DECOR} alt="menu decor" className="menu-decor" /> */}
            <div className='flex justify-content-center align-items-center '>
                <img src={NO_USER} alt="no user" className="mt-4" />
            </div >
            <div className='flex justify-content-center align-items-center '>
                <p>Ramesh Krishna</p>
            </div >
            {menuItems?.map((item, index) => <div key={index} className={`flex align-items-center cursor-pointer menu-item ${location.pathname === item.path ? " menu-item-active" : ""}`}
                onClick={() => { navigate(item.path) }}>
                <img src={item.icon} alt={item.label} className="mr-2" />
                {item.label}
            </div >)}
            <div className='flex align-items-center cursor-pointer menu-item ' onClick={() => logout()}>
                <img src={LOGOUT} alt="logout" className="mr-2" />
                Logout
            </div >
            <Card className="relative m-2 whatsapp-card mt-4">
                <img src={WHATSAPP_CARD} alt="test" className="absolute right-0" />
                <div className="w-100 p-3">
                    <div className="mb-2 w-8 mb-4 font-semi">
                        Get Updates on Whatsapp
                    </div>
                    <div className="p-inputgroup">
                        <InputText placeholder="Enter your whatsapp number" />
                        <Button icon="pi pi-arrow-right" className="p-button-success" />
                    </div>
                </div>
            </Card>
            {/* <Card className="relative ml-2 mr-2 mt-4 reward-card">
                <img src={REWARDS} alt="test" className="absolute right-0" />
                <div className="w-100 p-3">
                    <p className="mb-0 font-semi">Pay and Get Rewards</p>
                    <p className="text-xs font-l">Enter your whatsapp number to get updates</p>
                    <a className="text-white font-semi"> Check Now</a>
                </div>
            </Card> */}
        </>
    )
}

export default SideMenu;