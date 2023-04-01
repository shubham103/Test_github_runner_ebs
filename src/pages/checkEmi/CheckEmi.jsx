import React from "react";
import { Card } from 'primereact/card';
import WHATSAPP from '../../assets/images/whatsapp.png';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import DOC from '../../assets/images/doc.png';
import './CheckEmi.scss';



const CheckEmi = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <p>Check EMI</p>
            </div>
            <div className="col-12 md:col-4 lg:col-4">
                <Card className="total-card">
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center total-title border-round-xs pl-2 pr-2 text-xs text-white-alpha-90">Total Amount</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center font-m text-4xl">RS. 1,20,000</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap ">
                        <div className="flex align-items-center justify-content-center font-m text-xs">Total Budget</div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-4 lg:col-4">
                <Card className="paid-card">
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center paid-title border-round-xs pl-2 pr-2 text-xs text-white-alpha-90">Total Amount</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center font-m text-4xl">RS. 1,20,000</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap ">
                        <div className="flex align-items-center justify-content-center font-m text-xs">Total Budget</div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-4 lg:col-4">
                <Card className="pending-card">
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center pending-title border-round-xs pl-2 pr-2 text-xs text-white-alpha-90">Total Amount</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap mb-2">
                        <div className="flex align-items-center justify-content-center font-m text-4xl">RS. 1,20,000</div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap ">
                        <div className="flex align-items-center justify-content-center font-m text-xs">Total Budget</div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-3 lg:col-3">
                <label>Start Live Chat</label>
                <Card className="payment-card mt-2">
                    <div className='flex justify-content-center align-items-center'>
                        <img src={WHATSAPP} alt="Whatsapp" />
                    </div >
                    <div className='flex justify-content-center align-items-center mt-4'>
                        <InputText placeholder="Enter your Whatsapp no." />
                    </div >
                    <div className='flex justify-content-center align-items-center'>
                        Submit and we will contact within 2hr
                    </div >
                    <div className='flex justify-content-center align-items-center mt-4'>
                        <Button label="Submit" />
                    </div >
                </Card>
            </div>
            <div className="col-12 md:col-9 lg:col-9">
                <label>Start Live Chat</label>
                <Card className="emi-paid-card mt-2">
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className='flex justify-content-center align-items-center text-5xl font-m'>
                                2nd EMI
                            </div >
                            <div className='flex justify-content-center align-items-center text-2xl font-l'>
                                of 9
                            </div >
                            <div className='flex justify-content-center align-items-center text-2xl font-l'>
                                Installments
                            </div >

                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className='flex justify-content-center align-items-center text-base font-bold'>
                                Amount Due
                            </div >
                            <div className='flex justify-content-center align-items-center font-semi  text-5xl'>
                                9,000
                            </div >
                            <div className='flex justify-content-center align-items-center mt-4'>
                                <Button label="Pay Now" />
                            </div >
                        </div>

                    </div>

                </Card>
            </div>
            <div className="col-12 md:col-4 lg:col-4">
                <Card className="register-card">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex align-items-center justify-content-center text-4xl font-m">Fastest & Easiest
                            Educational Payment Mode </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-4">
                        <div className="flex align-items-center justify-content-center font-base ">
                            <a href="">Register your student</a>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="col-12 md:col-8 lg:col-8">
                <Card className="application-track-card">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex align-items-center justify-content-center ">
                            <img src={DOC} alt="doc" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-4">
                        <div className="flex align-items-center justify-content-center text-2xl font-m">
                            Track Application Status
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-2">
                        <div className="flex align-items-center justify-content-center font-base font-l">
                            Check the status of your application
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-2">
                        <div className="flex align-items-center justify-content-center font-base ">
                            <a href="">Track Now</a>
                        </div>
                    </div>
                </Card>
            </div>


        </div>
    )
};

export default CheckEmi;