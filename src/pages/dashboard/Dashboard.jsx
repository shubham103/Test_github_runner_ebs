import React from "react";
import { Card } from 'primereact/card';
import './Dashboard.scss';
import DOLLER from '../../assets/images/doller.png';
import WHATSAPP from '../../assets/images/whatsapp.png';
import DOC from '../../assets/images/doc.png';
import AMOUNT_DUE from '../../assets/images/amount-due.png';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12 md:col-5 sm:col-12 lg:col-5">
                <label>Loan Amount</label>
                <Card className="loan-card">
                    <div className="flex">
                        <div className="mr-2">
                            <img src={DOLLER} alt="doller" />
                        </div>
                        <div>
                            <p className="m-0 loan-label">Total Budget</p>
                            <p className="m-0 currency">1,20,000</p>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-2">
                            <img src={DOLLER} alt="doller" />
                        </div>
                        <div>
                            <p className="m-0 loan-label">Total Paid</p>
                            <p className="m-0 currency">20,000</p>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-2">
                            <img src={DOLLER} alt="doller" />
                        </div>
                        <div>
                            <p className="m-0 loan-label">Amount Pending</p>
                            <p className="m-0 currency">1,00,000</p>
                        </div>
                    </div>
                </Card>
                <Card className="mt-4 whatsapp-card">
                    <div className="flex">
                        <div className="mr-2">
                            <img src={WHATSAPP} alt="doller" />
                        </div>
                        <div>
                            <p className="m-0 text-white-alpha-90">Let's jump on a call</p>
                            <p className="m-0 text-sm text-white-alpha-50 font-normal">Developing digital protocols crafted for validating predefined</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-7 sm:col-12 lg:col-7">
                <label>Application Status</label>
                <Card className="app-status-card">
                    <div className="flex ">
                        <div className="mr-2">
                            <img src={DOC} alt="doc" />
                        </div>
                        <div>
                            <p className="m-0">Track Application Status</p>
                            <p className="m-0 text-sm font-normal">Check the status of your application below</p>
                        </div>
                    </div>
                </Card>
                <Card className="progress-card mt-4">
                    <div className="flex ">
                        Progress will come here
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-12 sm:col-12 lg:col-12">
                <div className="grid">
                    <div className="col-12 md:col-4 sm:col-12 lg:col-4">
                        <label >Payment</label>
                        <Card className="payment-card mt-2">
                            <div className="card">
                                <div className="flex justify-content-between flex-wrap card-container purple-container">
                                    <div className="flex align-items-center justify-content-center  font-bold ">
                                        <img src={AMOUNT_DUE} alt="Amount Due" className="mr-2" />
                                        Amount Due
                                    </div>
                                    <div className="flex align-items-center justify-content-center ">
                                        2 of 9 EMI payments
                                    </div>
                                </div>
                                <div className='flex justify-content-center align-items-center amount-due mt-4'>
                                    12,000
                                </div >
                                <div className='flex justify-content-center align-items-center mt-4'>
                                    <Button label="Pay Now" />
                                </div >
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 md:col-4 sm:col-12 lg:col-4">
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
                    <div className="col-12 md:col-4 sm:col-12 lg:col-4">
                        <label>Check EMI</label>
                        <Card className="check-emi-card mt-2">
                            <div className='flex justify-content-center align-items-center'>
                                <p>Check your EMI plan</p>
                            </div >
                            <div className='flex justify-content-center align-items-center'>
                                <div>
                                    <p>EMI PAID</p>
                                    <p>2</p>
                                    <p>Of 9 month plan</p>
                                </div>
                            </div >
                            <div className='flex justify-content-center align-items-center'>
                                <a href="">Check EMI</a>
                            </div >
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;