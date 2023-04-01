import React from "react";
import NO_USER from '../../assets/images/no-user.png'
import CIRCLE_FILLED from '../../assets/images/circle-filled.svg';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { Card } from 'primereact/card';
import './Settings.scss'
const Settings = () => {
    return (
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
                <p>Name & Profile Picture</p>
                <Card className="profile-card ">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center justify-content-center m-2">
                            <div className='align-items-center flex'>
                                <img src={NO_USER} alt="profile" className="mr-2" />
                                Jenny Hopkins
                            </div >
                        </div>
                        <div className="flex align-items-center justify-content-center m-2">
                            <a href="">Edit</a>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-6">
                <p>Email Preferences</p>
                <Card className="email-card ">
                    <div className="flex justify-content-between flex-wrap  align-content-center">
                        <div className="flex align-items-center justify-content-center m-2">
                            <div className=''>
                                <p className="font-base font-l m-0">Primary email address</p>
                                <p className="font-base m-0">jenny@example.in</p>
                            </div >

                        </div>
                        <div className="flex align-items-center justify-content-center m-2">
                            <a href="" className="flex"><img src={CIRCLE_FILLED} alt="circle filled" className="mr-2" />Edit</a>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 ">
                <p>Other Contact Details</p>
                <Card className="profile-card ">
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center justify-content-center m-2">
                            <div className=''>
                                <p className="font-base font-l m-0">Phone Number</p>
                                <p className="font-base m-0">9998877653</p>
                            </div >

                        </div>
                        <div className="flex align-items-center justify-content-center m-2">
                            <a href="" className="flex"><img src={CIRCLE_FILLED} alt="circle filled" className="mr-2" />Edit</a>
                        </div>
                    </div>
                    <div className="flex justify-content-between flex-wrap">
                        <div className="flex align-items-center justify-content-center m-2">
                            <div className=''>
                                <p className="font-base font-l m-0">Timezone</p>
                                <p className="font-base m-0">India (Asia/Kolkata) UTC +05:30</p>
                            </div >

                        </div>
                        <div className="flex align-items-center justify-content-center m-2">
                            <a href="" className="flex">Edit</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div >
    )
};

export default Settings;