import React from "react";
import './Application.scss';
import { useLocation } from "react-router-dom";
import FormBanner from "./FormBanner";
import DigitalAgreement from "./DigitalAgreement";
import Payment from "./Payment";



const ApplicationFormThree = () => {
    const location = useLocation();
    return (
        <div className="grid">
            {/* <FormBanner /> */}
            {true && <DigitalAgreement />}
            {false && <Payment />}
        </div >
    )
}

export default ApplicationFormThree;