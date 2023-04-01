import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from "../pages/applicationForm/ApplicationForm";
import CheckEmi from "../pages/checkEmi/CheckEmi";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import NewUserHome from "../pages/home/NewUserHome";
import Login from "../pages/login/Login";
import OtpForm from "../pages/login/OtpForm";
import Payments from "../pages/payments/Payments";
import Registration from "../pages/registration/Registration";
import Rewards from "../pages/rewards/Rewards";
import Settings from "../pages/settings/Settings";
import Thankyou from "../pages/thankyou/Thankyou";

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/' element={< NewUserHome />}></Route>
            <Route exact path='/new-user-home' element={< NewUserHome />}></Route>
            <Route exact path='/otp-existing-user' element={< OtpForm />}></Route>
            <Route exact path='/dashboard/new-user' element={< Registration />}></Route>
            <Route exact path='/application-form-one' element={< ApplicationForm />}></Route>
            <Route exact path='/application-form-two' element={< ApplicationForm />}></Route>
            <Route exact path='/application-form-three' element={< ApplicationForm />}></Route>
            <Route exact path='/dashboard' element={< Home />}></Route>
            <Route exact path='/payments' element={< Payments />}></Route>
            <Route exact path='/rewards' element={< Rewards />}></Route>
            <Route exact path='/settings' element={< Settings />}></Route>
            <Route exact path='/check-emi' element={< CheckEmi />}></Route>
            <Route exact path='/dashboard/thankyou' element={< Thankyou />}></Route>
        </Routes>
    )

}

export default Routing;