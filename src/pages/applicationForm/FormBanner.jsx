import React from "react";
import STATUS_IN_PROGRSS from '../../assets/images/in-progress.svg';
import STATUS_FILLED from '../../assets/images/status-filled.svg';
import STATUS_PENDING from '../../assets/images/circle.svg';
import './Application.scss';

const FormBanner = () => {
    return (
        <div className="col-12 stepper-grid">
            <div className='flex title'>
                Easy three step application
            </div>
            <ol className="b-stepper">
                <li className="b-stepper__item">
                    <img src={STATUS_FILLED} alt="in progress" className="mr-2" />
                    Enter Student Details
                </li>
                <li className="b-stepper__item">
                    <img src={STATUS_IN_PROGRSS} alt="circle" className="mr-2" />
                    Complete KYC
                </li>
                <li className="b-stepper__item">
                    <img src={STATUS_PENDING} alt="in progress" className="mr-2" />
                    Loan Process
                </li>
            </ol>
        </div>
    )
}

export default FormBanner;