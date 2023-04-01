import React from "react";
import './Application.scss';
import StudentForm from "./StudentForm";
import { useLocation } from "react-router-dom";
import FormBanner from "./FormBanner";
import KycForm from "./KycForm";
import DigitalAgreement from "./DigitalAgreement";
import ApplicationFormThree from "./ApplicationFormThree";



const ApplicationForm = () => {
    const location = useLocation();
    return (
        <div className="grid">
            <FormBanner />
            <div className="form-layout">
                {location.pathname === '/application-form-one' && <StudentForm />}
                {location.pathname === '/application-form-two' && <KycForm />}
                {location.pathname === '/application-form-three' && <ApplicationFormThree />}
            </div>
        </div >
    )
}

export default ApplicationForm;