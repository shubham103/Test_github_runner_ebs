import React from "react";
import './Application.scss';
import KycForm from "./KycForm";
import FormBanner from "./FormBanner";

const ApplicationFormTwo = () => {
    return (
        <div className="grid">
            <FormBanner />
            <KycForm />
        </div >
    )
}

export default ApplicationFormTwo;