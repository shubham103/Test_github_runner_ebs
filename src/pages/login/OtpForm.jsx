import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import './Login.scss';
import OTP_IMG from '../../assets/images/OTP.svg';
import OTPInput from "otp-input-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { post } from "../../api/services";


const OtpForm = () => {
    const navigate = useNavigate();
    const toast = useRef(null);

    const location = useLocation();
    let values = location.state;
    const [OTP, setOTP] = useState("");
    const [otpEntered, setOtpEntered] = useState(false);

    const [time, setTime] = useState(60);

    const getTime = () => {
        if (time < 0) {
            return;
        }
        setTimeout(() => {
            setTime(time - 1)
        }, 1000);
        return "00:" + time;
    }

    const handleSubmit = () => {
        if (OTP === '1234') {
            // values.userType = 'EXIST_USER';
            // localStorage.setItem('currentUser', JSON.stringify(values));
            // navigate('/dashboard');
            validateOtp();
        } else {
            toast.current.show({ severity: 'error', summary: '', detail: 'Invalid OTP' });
        }
    }

    const validateOtp = () => {
        post('/scoreme/EquifaxValidateOTP').then(res => {
            if (res.status === 200) {
                values.userType = 'EXIST_USER';
                localStorage.setItem('currentUser', JSON.stringify(values));
                navigate('/dashboard');
            } else {
                toast.current.show({ severity: 'error', summary: '', detail: 'Invalid OTP' });
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: '', detail: err });
        });
    }

    const resendOtp = () => {
        post('scoreme/EquifaxResendOTP').then(res => {
            if (res.status === 200) {
                setTime(60); setOtpEntered(false); setOTP('');
                toast.current.show({ severity: 'success', summary: '', detail: 'OTP hasbeen sent succesfuly' });
            } else {
                toast.current.show({ severity: 'error', summary: '', detail: 'Invalid OTP' });
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: '', detail: err });
        });
    }


    return (
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <div className="otp-form">
                            <p className="login-title text-4xl font-semi mt-8 pt-8 mb-1">Enter your OTP</p>
                            <p className="sub-title font-l mt-0 mb-4">A 4 digit OTP has been send to your mobile (One time password) on your mobile number {values.mobile.replace(/.{0,8}$/, '') + " xxxxxxxx"}</p>
                            <div className="flex flex-column mt-3 align-items-center mb-4">
                                <OTPInput value={OTP} onChange={(e) => { console.log('e', e); setOTP(e); setOtpEntered(true) }} OTPLength={4} otpType="number" disabled={false} secure placeholder={['-', '-', '-', '-']} />
                            </div>
                            <div className="flex flex-column mt-3">
                                <Button label="Submit" className="w-full login-button" onClick={handleSubmit} />
                            </div>
                            {time > 0 && !otpEntered && <p className="font-l text-sm mt-4">Wait <span>{getTime()}</span> to resend OTP</p>}
                            {time === 0 && !otpEntered && <div className="flex justify-content-between flex-wrap mt-4">
                                <div className="flex align-items-center justify-content-center ">00:00</div>
                                <div className="flex align-items-center justify-content-center ">
                                    <a onClick={() => { resendOtp(); setTime(60) }}>Resend OTP</a>
                                </div>
                            </div>}
                            {otpEntered && <div className="flex justify-content-end flex-wrap mt-4">
                                <a onClick={() => resendOtp()}>Resend OTP</a>
                            </div>}
                            <div className="flex flex-wrap mt-4">
                                <div className="flex align-items-center justify-content-center ">
                                    <a onClick={() => navigate('/login')}>Go Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6 flex justify-content-center flex-wrap hide-logo">
                <img src={OTP_IMG} alt="login" className="w-9 " />
            </div>
            <Toast ref={toast} />

        </div>

    )
}

export default OtpForm;