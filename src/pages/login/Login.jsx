import React from "react";
import './Login.scss';
import LOGIN_PAGE_IMAGE from '../../assets/images/Login-page-img.svg';
import MobileInputForm from "./MobileInputForm";

const Login = () => {
    return (
        <div className="grid">
            <div className="col-12 md:col-12 lg:col-6">
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <MobileInputForm />
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6 text-center pt-6 hide-logo">
                <img src={LOGIN_PAGE_IMAGE} alt="login" className="w-9 " />
            </div>
        </div>
    )
}


export default Login;