import React, { useState } from "react";
import { Card } from 'primereact/card';
import { RadioButton } from 'primereact/radiobutton';
import CARD from '../../assets/images/card.svg';
import INTERNET_BANKING from '../../assets/images/internet-banking.svg';
import PAYPAL from '../../assets/images/paypal.svg';
import INFO from '../../assets/images/info.svg';
import WHATSAPP from '../../assets/images/whatsapp.png';

import './Payments.scss';

const Payments = () => {
    const [selectedOption, setSelectedOption] = useState('Card');
    return (
        <div className="grid">
            <div className="col-12 md:col-5 lg:col-5 ">
                <p className="font-m text-lg">Payment Info</p>
            </div>
            <div className="col-12 md:col-7 lg:col-7 ">
                <p className="font-m text-lg">Invoice Detail</p>
            </div>
            <div className="col-12 md:col-5 lg:col-5 grid-bg border-round-md p-4">
                <Card className="emi-card current-emi-card-bg text-white">
                    <div className="flex w-100">
                        <div className="w-8">
                            <small className="font-l text-xs">EMI #2</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">Preksha Eduteck Payment</p>
                            <small className="text-xs font-l mt-2">Current payble EMI</small>
                        </div>
                        <div className="w-4 text-center">
                            <small className="font-m text-xs">Payable Amount</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">9,000</p>
                            <p className="m-0 due-date bg-white-alpha-90  border-round-xs p-1">Due Date: 11 Jan 23</p>
                        </div>
                    </div>
                </Card>
                <Card className="emi-card past-emi-card-bg mt-4">
                    <div className="flex w-100">
                        <div className="w-8">
                            <small className="font-l text-xs">EMI #2</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">Preksha Eduteck Payment</p>
                            <small className="text-xs font-l mt-2">Current payble EMI</small>
                        </div>
                        <div className="w-4 text-center">
                            <small className="font-m text-xs">Payable Amount</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">9,000</p>
                            <p className="m-0 due-date bg-white-alpha-90  border-round-xs p-1">Due Date: 11 Jan 23</p>
                        </div>
                    </div>
                </Card>
                <Card className="emi-card past-emi-card-bg mt-4">
                    <div className="flex w-100">
                        <div className="w-8">
                            <small className="font-l text-xs">EMI #2</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">Preksha Eduteck Payment</p>
                            <small className="text-xs font-l mt-2">Current payble EMI</small>
                        </div>
                        <div className="w-4 text-center">
                            <small className="font-m text-xs">Payable Amount</small>
                            <p className="m-0 text-2xl font-m pt-2 pb-2">9,000</p>
                            <p className="m-0 due-date bg-white-alpha-90  border-round-xs p-1">Due Date: 11 Jan 23</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-7 lg:col-7 pt-0 pl-4">
                <Card className="emi-card invoice-details-card-bg text-sm">
                    <div className="flex justify-content-between flex-wrap ">
                        <div className="flex align-items-center justify-content-center">Nulla Lorem mollit duis  </div>
                        <div className="flex align-items-center justify-content-center ">1800</div>
                    </div>
                    <div className="flex justify-content-between flex-wrap mt-4">
                        <div className="flex align-items-center justify-content-center ">Laborum magna nulla   </div>
                        <div className="flex align-items-center justify-content-center ">1800</div>
                    </div>
                    <div className="flex justify-content-between flex-wrap mt-4">
                        <div className="flex align-items-center justify-content-center ">Nulla Lorem mollit duis  </div>
                        <div className="flex align-items-center justify-content-center ">1800</div>
                    </div>
                    <div className="flex justify-content-between flex-wrap mt-5">
                        <div className="flex align-items-center justify-content-center ">Total Amount  </div>
                        <div className="flex align-items-center justify-content-center ">1800</div>
                    </div>
                </Card>
                <hr className="mt-4 mb-4" />
                <p className="font-m text-lg">Made of Payment</p>
                <Card className="emi-card invoice-details-card-bg text-sm ">
                    <div className={`flex align-items-center p-2 ${selectedOption === 'Card' ? "active-payment-method" : ""}`}>
                        <RadioButton name="card" value="Card" checked={selectedOption === 'Card'} onChange={(e) => setSelectedOption(e.value)} />
                        <img src={CARD} alt="card" className="ml-3" />
                        <label htmlFor="card" className="ml-3">Card</label>
                    </div>
                    <div className={`flex align-items-center p-2 ${selectedOption === 'Internet Banking' ? "active-payment-method" : ""}`}>
                        <RadioButton name="internetBanking" value="Internet Banking" checked={selectedOption === 'Internet Banking'} onChange={(e) => setSelectedOption(e.value)} />
                        <img src={INTERNET_BANKING} alt="internetBanking" className="ml-3" />
                        <label htmlFor="internetBanking" className="ml-3">Internet Banking</label>
                    </div>
                    <div className={`flex align-items-center p-2 ${selectedOption === 'Paypal' ? "active-payment-method" : ""}`}>
                        <RadioButton name="paypal" value="Paypal" checked={selectedOption === 'Paypal'} onChange={(e) => setSelectedOption(e.value)} />
                        <img src={PAYPAL} alt="paypal" className="ml-3" />
                    </div>
                    <div className={`flex align-items-center p-2 ${selectedOption === 'UPI' ? "active-payment-method" : ""}`}>
                        <RadioButton name="upi" value="UPI" checked={selectedOption === 'UPI'} onChange={(e) => setSelectedOption(e.value)} />
                        <img src={INFO} alt="upi" className="ml-3" />
                        <label htmlFor="upi" className="ml-3">UPI payment</label>
                    </div>
                </Card>

            </div>
            <div className="col-12">
                <div className="grid">
                    <div className="col-12 md:col-5 lg:col-5 ">
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
                    <div className="col-12 md:col-7 lg:col-7 pl-4 pt-1">
                        <p>Please Note: <span className="note-value">
                            You will be directed to another payment gateway screen for further process. </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Payments;