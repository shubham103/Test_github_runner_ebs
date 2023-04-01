import React from "react";
import STEPPER_ONE from '../../assets/images/stepper-one.svg';
import STEPPER_TWO from '../../assets/images/stepper-two.svg';
import STEPPER_THREE from '../../assets/images/stepper-three.svg';
import STATUS_FILLED from '../../assets/images/status-filled.svg';



const PendingGrid = (props) => {
    const { currentUser } = props;

    return (
        <>
            <div className="col-12 md:col-2 lg:col-2 sm:col-12">
                <h2 className="font-l">Your Application Status</h2>
            </div>
            <div className="col-12 md:col-10 lg:col-10 sm:col-12">
                <div className="option-1 option-1-1">
                    <ol className="c-stepper">
                        <li className="c-stepper__item c-stepper-bg-one">
                            <h3 className="c-stepper__title">
                                <img src={STEPPER_ONE} alt="Fill application details" className="c-stepper__title" />
                            </h3>
                            <p className="c-stepper__desc">Completed Application Details</p>
                        </li>
                        <li className="c-stepper__item c-stepper-bg-two">
                            <h3 className="c-stepper__title">
                                <img src={STEPPER_TWO} alt="Fill application details" className="c-stepper__title" />
                            </h3>
                            <p className="c-stepper__desc"><b>Status: </b> Approval Pending </p>
                            <p className="c-stepper__desc">Your Application Number: {currentUser.applicationNo} </p>
                            <p className="c-stepper__desc">Get Status Confirmation via Whatsapp </p>
                        </li>
                        <li className="c-stepper__item c-stepper-bg-three">
                            <h3 className="c-stepper__title">
                                <img src={STEPPER_THREE} alt="Fill application details" className="c-stepper__title" />
                            </h3>
                            <p className="c-stepper__desc">Pay monthly EMI and Collect rewards</p>
                        </li>
                    </ol>
                </div>
            </div>
        </>

    )
}

export default PendingGrid;