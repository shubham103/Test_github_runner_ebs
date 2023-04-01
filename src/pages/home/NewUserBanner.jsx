import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import BANNER_LOGO from '../../assets/images/banner-logo.svg';



const NewUserBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-column banner-container p-4 relative">
            <p className="welcome">
                ACCESSIBLE EDUCATION TO ALL
            </p>
            <div className="flex  m-2">
                <h1 className="mt-1 mb-1">Fastest & Easiest</h1>
            </div>
            <div className="flex  m-2">
                <h1 className="mt-1 mb-1">Educational</h1>
            </div>
            <div className="flex  m-2">
                <h1 className="mt-1 mb-1">Payment Mode</h1>
            </div>
            <div className="flex  m-2 pt-5">
                <Button label="Fill an Application" aria-label="Submit" onClick={() => { navigate('/application-form-one') }} />
            </div>
            <img src={BANNER_LOGO} alt="banner logo" className="absolute top-0 right-0 h-full" />
        </div>
    )
}

export default NewUserBanner;