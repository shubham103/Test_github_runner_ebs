import React, { useRef } from "react";
import './Registration.scss';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";


const Registration = () => {
    const toast = useRef(null);
    const navigate = useNavigate()
    const items = [
        {
            label: 'Fill Application Details',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Fill Application Details', detail: event.item.label });
            }
        },
        {
            label: 'Select EMI Plan & Complete your KYC',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Pay monthly EMI & Collect rewards',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        }
    ];

    return (
        <>
            <div className="flex-column card-container ound pt-4 pb-4">
                <div className="flex align-items-center justify-content-center m-2 border-round">
                    <p className="welcome">
                        WELCOME TO PREKSHA
                    </p>
                </div>
                <div className="flex align-items-center justify-content-center m-2">
                    <h1 className="mt-1 mb-1">Fastest & Easiest</h1>
                </div>
                <div className="flex align-items-center justify-content-center m-2">
                    <h1 className="mt-1 mb-1">Educational Payment Mode</h1>
                </div>
                <div className="flex align-items-center justify-content-center m-2">
                    <p className="font-l">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
                <div className="flex align-items-center justify-content-center m-2">
                    <Button label="Fill a New Application" aria-label="Submit" onClick={() => { navigate('/application-form-one') }} />
                </div>
            </div>
            <div className="grid mt-8">
                <div className="col-12 md:col-4 lg:col-4 sm:col-12">
                    <h2>Our Process</h2>
                </div>
                <div className="col-12 md:col-8 lg:col-8 sm:col-12">
                    <Toast ref={toast}></Toast>
                    <Steps model={items} />
                </div>
            </div>
            <div className="grid">
                <Footer />
            </div>
        </>
    )
}

export default Registration;