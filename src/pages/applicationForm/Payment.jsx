import { Card } from "primereact/card";
import React from "react";
import RECEIPT from '../../assets/images/receipt.svg';
import BADGE_PERCENT from '../../assets/images/badge-percent.svg';
import BADGE_CHECK from '../../assets/images/badge-check.svg';
import { Button } from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';
import CARD from '../../assets/images/mastercard.svg';
import PAYPAL from '../../assets/images/paypal.svg';
import NET_BANKING from '../../assets/images/netbanking.svg';
import UPI from '../../assets/images/upi.svg';

const Payment = () => {
    return (
        <>
            <div className="col-12 p-4 border-gray-400 border-1 border-round mb-3">
                <p className="text-xl text-primary">Invoice</p>
                <div className="flex justify-content-between flex-wrap card-container purple-container font-l mb-3">
                    <div className="flex align-items-center justify-content-center">Institute Name</div>
                    <div className="flex align-items-center justify-content-center ">Narayana High School</div>
                </div>
                <div className="flex justify-content-between flex-wrap card-container purple-container font-l mb-3">
                    <div className="flex align-items-center justify-content-center">Loan Amount</div>
                    <div className="flex align-items-center justify-content-center ">1,20,000</div>
                </div>
                <div className="flex justify-content-between flex-wrap card-container purple-container font-l mb-3">
                    <div className="flex align-items-center justify-content-center">Intrest Rate</div>
                    <div className="flex align-items-center justify-content-center ">0%</div>
                </div>
                <div className="flex justify-content-between flex-wrap card-container purple-container font-l mb-3">
                    <div className="flex align-items-center justify-content-center">Payment</div>
                    <div className="flex align-items-center justify-content-center ">0.1%</div>
                </div>
                <div className="flex justify-content-between flex-wrap card-container purple-container font-l mb-3 border-top-1 border-gray-300 pt-3">
                    <div className="flex align-items-center justify-content-center">Total Amount</div>
                    <div className="flex align-items-center justify-content-center ">1200</div>
                </div>
            </div>
            <div className="col-12 p-4 mb-3">
                <p className="text-xl text-primary">Re-Confirm EMI Plan</p>
                <div className="grid">
                    <div className="col-12 md:col-4 lg:col-4">
                        <Card className="form-payment-card">
                            <div className="flex">
                                <p className="title">
                                    3 Months Plan
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <p className="plan-amount">
                                    RS. 19,000
                                </p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={RECEIPT} alt="Receipt" className="mr-2" /> No. of EMI: 3</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_PERCENT} alt="Badge Percent" className="mr-2" /> Interst: 0%</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_CHECK} alt="Badge Check" className="mr-2" /> 0.1% Payable today</p>
                            </div>
                            <Button label="Select Plan" className="p-button-outlined w-full mt-3" />
                        </Card>
                    </div>
                    <div className="col-12 md:col-4 lg:col-4">
                        <Card className="form-payment-card">
                            <div className="flex">
                                <p className="title">
                                    6 Months Plan
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <p className="plan-amount">
                                    RS. 11,000
                                </p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={RECEIPT} alt="Receipt" className="mr-2" /> No. of EMI: 6</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_PERCENT} alt="Badge Percent" className="mr-2" /> Interst: 0%</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_CHECK} alt="Badge Check" className="mr-2" /> 0.1% Payable today</p>
                            </div>
                            <Button label="Select Plan" className="p-button-outlined w-full mt-3" />
                        </Card>
                    </div>
                    <div className="col-12 md:col-4 lg:col-4">
                        <Card className="form-payment-card">
                            <div className="flex">
                                <p className="title">
                                    9 Months Plan
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <p className="plan-amount">
                                    RS. 8,000
                                </p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={RECEIPT} alt="Receipt" className="mr-2" /> No. of EMI: 6</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_PERCENT} alt="Badge Percent" className="mr-2" /> Interst: 0%</p>
                            </div>
                            <div className="flex align-items-center flex-wrap card-container mt-3">
                                <p className="no-of-emi flex  align-items-center justify-content-center flex-wrap"><img src={BADGE_CHECK} alt="Badge Check" className="mr-2" /> 0.1% Payable today</p>
                            </div>
                            <Button label="Select Plan" className="p-button-outlined w-full mt-3" />
                        </Card>
                    </div>
                </div>


            </div>
            <div className="col-12 p-4 border-gray-400 border-1 border-round mb-3">
                <p className="text-xl text-primary">Mode of Payment</p>
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-6">
                        <div className="flex align-items-center border-1 border-gray-300 p-4 border-round-md w-10">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
                            <img src={CARD} alt="master card" className="pl-3 pr-3" />
                            <label htmlFor="ingredient1" className="ml-2">
                                Pay using Card</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <div className="flex align-items-center border-1 border-gray-300 p-4 border-round-md w-10">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
                            <img src={PAYPAL} alt="paypal" className="pl-3 pr-3" />
                            <label htmlFor="ingredient1" className="ml-2">Pay using Paypal</label>
                        </div>
                    </div>

                    <div className="col-12 md:col-6 lg:col-6">
                        <div className="flex align-items-center border-1 border-gray-300 p-4 border-round-md w-10">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
                            <img src={NET_BANKING} alt="net banking" className="pl-3 pr-3" />
                            <label htmlFor="ingredient1" className="ml-2">Pay using Net Banking</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <div className="flex align-items-center border-1 border-gray-300 p-4 border-round-md w-10">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" />
                            <img src={UPI} alt="upi" className="pl-3 pr-3" />
                            <label htmlFor="ingredient1" className="ml-2">Pay using UPI</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 p-4">
                <div className="flex justify-content-between flex-wrap card-container purple-container">
                    <Button label="Back" className="p-button-outlined" />
                    <Button label="Pay Now" />
                </div>
            </div>
        </>
    )
}

export default Payment;