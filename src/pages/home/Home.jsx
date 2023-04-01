import { Card } from "primereact/card";
import React from "react";
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import INSTITUTE from '../../assets/images/institute.svg';
import NOTIF from '../../assets/images/notification.svg';
import STAR from '../../assets/images/Star.svg';
import './Home.scss';
import { Button } from "primereact/button";
import NewUserBanner from "./NewUserBanner";


const Home = () => {
    const columns = [
        { field: 'paidTo', header: 'Paid To' },
        { field: 'date', header: 'Date' },
        { field: 'amount', header: 'Amount' },
        { field: 'downloadInvoice', header: 'Download Invoice' }
    ];
    const paymentHistory = [
        {
            paidTo: 'Institute 1',
            date: 'Feb 22 2023, 5:16PM',
            amount: 20000,
            downloadInvoice: ''
        },
        {
            paidTo: 'Institute 1',
            date: 'Feb 22 2023, 5:16PM',
            amount: 30000,
            downloadInvoice: ''
        }
    ]
    const valueTemplate = (value) => {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    };
    const instituteTemplate = (e) => {
        return <div className="flex align-content-center flex-wrap gap-2" >
            <div className="flex align-items-center justify-content-center ">
                <img src={INSTITUTE} alt="institute" />
            </div>
            <div className="flex align-items-center justify-content-center" > {e.paidTo}</div>
        </div>;
    }
    const dateTemplate = (e) => {
        return <div className="flex align-content-center flex-wrap " >
            <div className="flex align-items-center justify-content-center" > {e.date}</div>
        </div>;

    }
    const amountTemplate = (e) => {
        return <div className="flex align-content-center flex-wrap " >
            <div className="flex align-items-center justify-content-center" >-Rs {e.amount}</div>
        </div>;

    }
    const invoiceTemplate = (e) => {
        return <i className="pi pi-download pointer"></i>
    }

    return (
        <>
            <div className="grid">
                <div className="col-12 md:col-12 lg:col-12 pb-0 ">
                    <p className="m-0 text-regular text-base">Payment History</p>
                </div>
                <div className="col-12 md:col-4 lg:col-4">
                    <Card className="total-card">
                        <p className="text-white text-sm">Total Loan Amount</p>
                        <p className="text-white font-semibold text-3xl mt-2">Rs. 1,20,000</p>
                        <div className="flex justify-content-start flex-wrap card-container blue-container">
                            <div className="flex align-items-center w-8 ">
                                <ProgressBar className="flex " value={100} style={{ height: '6px', width: "100%" }} displayValueTemplate={valueTemplate}></ProgressBar>
                            </div>
                            <div className="flex align-items-center justify-content-center pl-2 text-white">Approved</div>
                        </div>
                    </Card>
                </div>
                <div className="col-12 md:col-4 lg:col-4">
                    <Card className="paid-card">
                        <p className="text-white text-sm">Amount Paid</p>
                        <p className="text-white font-semibold text-3xl mt-2">Rs. 1,20,000</p>
                        <div className="flex justify-content-start flex-wrap card-container blue-container">
                            <div className="flex align-items-center w-8 ">
                                <ProgressBar value={10} style={{ height: '6px', width: "100%" }} displayValueTemplate={valueTemplate}></ProgressBar>
                            </div>
                            <div className="flex align-items-center justify-content-center pl-2 text-white">1/9 Paid</div>
                        </div>
                    </Card>
                </div>
                <div className="col-12 md:col-4 lg:col-4">
                    <Card className="pending-card">
                        <p className="text-white text-sm">Pending Amount</p>
                        <p className="text-white font-semibold text-3xl mt-2">Rs. 1,20,000</p>
                        <div className="flex justify-content-start flex-wrap card-container blue-container">
                            <div className="flex align-items-center w-8 ">
                                <ProgressBar value={10} style={{ height: '6px', width: '100%' }} displayValueTemplate={valueTemplate}></ProgressBar>
                            </div>
                            <div className="flex align-items-center justify-content-center pl-2 text-white">90% Remaining</div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-8">
                    <div className="flex justify-content-between flex-wrap ">
                        <div className="flex align-items-center justify-content-center">
                            <p className="m-0 text-regular text-base">Payment History</p>
                        </div>
                        <div className="flex align-items-center justify-content-center">
                            {/* <Button label="Primary" text icon="pi pi-arrow-right" iconPos="right" /> */}
                            <a className="text-xs font-l text-regular">View More
                                <span className="ml-2"><i className="pi pi-arrow-right text-regular" style={{ fontSize: '.75rem' }}></i></span>
                            </a>
                        </div>
                    </div>
                    <DataTable value={paymentHistory} className="primary-table mt-2">
                        <Column field="paidTo" header="Paid To" body={instituteTemplate}></Column>
                        <Column header="Date" body={dateTemplate}></Column>
                        <Column field="amount" header="Amount" body={amountTemplate}></Column>
                        <Column header="Download Invoice" body={invoiceTemplate} headerStyle={{ textAlign: 'center' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>

                </div>
                <div className="col-12 md:col-6 lg:col-4">
                    <div className="flex justify-content-between flex-wrap ">
                        <div className="flex align-items-center justify-content-center">
                            <p className="m-0 text-regular text-base">EMI Payment</p>
                        </div>
                    </div>
                    <div className="border-gray-400 border-1 border-round p-2 mt-2 emi-progress-bar">
                        <Card className="total-card relative text-white" >
                            <img src={STAR} alt="star" className="absolute top-0 right-0" />
                            <p className="text-xs m-0 ">Due Date: 16 Feb 23</p>
                            <div className="flex align-content-center flex-wrap gap-2 mt-4" >
                                <div className="flex align-items-center justify-content-center text-xs font-semi ">
                                    Payble Amount
                                </div>
                                <div className="flex align-items-center justify-content-center text-3xl font-m" >Rs 9,000</div>
                            </div>
                            <div className="flex justify-content-between flex-wrap mt-4">
                                <div className="flex align-items-center justify-content-center text-xs font-r">Current Payable EMI</div>
                                <div className="flex align-items-center justify-content-center text-xs font-m">Preksha Edutech </div>
                            </div>
                        </Card>
                        <ProgressBar value={50} style={{ height: '6px' }} displayValueTemplate={valueTemplate} className="mt-2 "></ProgressBar>
                        <div className="flex justify-content-between flex-wrap mt-4">
                            <div className="flex align-items-center justify-content-center text-xs font-r">2nd EMI payment of 9</div>
                            <div className="flex align-items-center justify-content-center text-sm text-regular font-l">
                                <Button label="Pay Now" aria-label="Submit" onClick={() => { }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-12 md:col-12 lg:col-8">
                    <div className="flex justify-content-between flex-wrap ">
                        <div className="flex align-items-center justify-content-center">
                            <p className="m-0 text-regular text-base">File an Application</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <NewUserBanner />
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-4">
                    <div className="flex justify-content-between flex-wrap ">
                        <div className="flex align-items-center justify-content-center">
                            <p className="m-0 text-regular text-base">Your Schedule EMI</p>
                        </div>
                    </div>
                    <div className="border-gray-400 border-1 border-round p-4 mt-2">
                        <p className="m-0">
                            Your upcoming monthly EMI's
                        </p>
                        <div className="flex justify-content-between flex-wrap mt-2 p-2 border-gray-400 border-1 border-round ">
                            <div className="flex align-items-center justify-content-center text-xs font-r">   Rs. 12,000</div>
                            <div className="flex align-items-center justify-content-center text-xs font-m"> Mar 21, 2023
                                <i className="pi pi-bell notif-icon ml-2"></i>
                            </div>
                        </div>
                        <div className="flex justify-content-between flex-wrap mt-2 p-2 border-gray-400 border-1 border-round ">
                            <div className="flex align-items-center justify-content-center text-xs font-r">   Rs. 12,000</div>
                            <div className="flex align-items-center justify-content-center text-xs font-m"> Mar 21, 2023
                                <i className="pi pi-bell notif-icon ml-2"></i></div>
                        </div>
                        <div className="flex justify-content-between flex-wrap mt-2 p-2 border-gray-400 border-1 border-round ">
                            <div className="flex align-items-center justify-content-center text-xs font-r">   Rs. 12,000</div>
                            <div className="flex align-items-center justify-content-center text-xs font-m"> Mar 21, 2023
                                <i className="pi pi-bell notif-icon ml-2"></i> </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;