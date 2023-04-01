import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import OTPInput from "otp-input-react";
import ProcessPopup from "../processPopup/ProcessPopup";
import './OtpPopup.scss';

const OtpPopup = (props) => {
    let values = JSON.parse(localStorage.getItem('currentUser'));
    const toast = useRef(null);
    const [time, setTime] = useState(60);
    const [otpEntered, setOtpEntered] = useState(false);
    const [OTP, setOTP] = useState("");

    const [showProcessPopup, setShowProcessPopup] = useState(false);
    const footerContent = (
        <Button label="Submit" className="w-full" onClick={() => onClickSubmit()} />
    );

    const onClickSubmit = () => {
        if (OTP === '1234') {
            setShowProcessPopup(true);
            values['userType'] = 'EXIST_USER';
            values.loanStatus = 'APPROVAL_PENDING';
            values.applicationNo = '123456';
            localStorage.setItem('currentUser', JSON.stringify(values));
        } else if (OTP === '') {
            toast.current.show({ severity: 'error', summary: '', detail: 'Please enter OTP' });
        } else {
            toast.current.show({ severity: 'error', summary: '', detail: 'Invalid OTP' });
        }
    }

    const getTime = () => {
        if (time < 0) {
            return;
        }
        setTimeout(() => {
            setTime(time - 1)
        }, 1000);
        return "00:" + time;
    }

    return (
        <Dialog header="Enter Your OTP" visible={props.visible} footer={footerContent} closable={false}>
            <p className="font-l text-sm mt-0">Verify your complete KYC with OTP</p>
            <div className="flex flex-column mt-3 align-items-center mb-4 otp-form">
                <OTPInput value={OTP} onChange={(e) => { setOTP(e); setOtpEntered(true) }} OTPLength={6} otpType="number" disabled={false} secure placeholder={['-', '-', '-', '-', '-', '-']} />
            </div>
            {time > 0 && !otpEntered && <p className="font-l text-sm  mt-3">Wait <span>{getTime()}</span> to resend OTP</p>}
            {time === 0 && !otpEntered && <div className="flex justify-content-between flex-wrap mt-3">
                <div className="flex align-items-center justify-content-center ">00:00</div>
                <div className="flex align-items-center justify-content-center ">
                    <a onClick={() => setTime(60)}>Resend OTP</a>
                </div>
            </div>}
            {otpEntered && <div className="flex justify-content-end flex-wrap mt-4">
                <a onClick={() => { setTime(60); setOtpEntered(false); setOTP('') }}>Resend OTP</a>
            </div>}
            {showProcessPopup && <ProcessPopup visible={true} title="Hang tight!" subTitle="Our gnomes are working hard on your loan application relax and check back later!"
                buttonLabel="Check Status" buttonType="primary" footerContent="Please note: your previous data is saved with us" />}
            <Toast ref={toast} />
        </Dialog>
    )
}

export default OtpPopup;