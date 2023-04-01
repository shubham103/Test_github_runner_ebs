import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import THUMB from '../../assets/images/thumb.svg';
import WHATSAPP from '../../assets/whatsapp.png';
import { InputText } from 'primereact/inputtext';
import './Thankyou.scss';


const Thankyou = () => {
    return (
        <div className="grid">
            <div className="col-12 md:col-7 lg:col-7">
                <p>Application Status</p>
                <Card className="total-card">
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <img src={THUMB} alt="thumb" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <p>Thank you for your Registration</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <p>We are processing your Application and will connect with you shortly in the meantime you can track status of your application below.  </p>
                        </div>
                    </div>
                    <Button label="Track My Application" />
                </Card>
            </div>
            <div className="col-12 md:col-5 lg:col-5">
                <p>Application Status</p>
                <Card className="total-card">

                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <p>Fastest & Easiest
                                Educational Payment Mode </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <p>Add your student details, check EMI plan and get started</p>
                        </div>
                    </div>
                    <Button label="Register Your Student" />
                </Card>
            </div>
            <div className="col-12 md:col-7 lg:col-7">
                <p>Start Live Chat</p>
                <Card className="total-card">
                    <div className="flex flex-row flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <p>Reach out to us today, we are just a ping away </p>
                        </div>
                    </div>
                    <div className='align-items-center cursor-pointer flex '>
                        <img src={WHATSAPP} alt="whatsapp" className="mr-4" />
                        <div>
                            <InputText placeholder="Enter your Whatsapp no." />
                            <p>Submit and we will contact within 2hr</p>
                            <Button label="Register Your Student" />
                        </div>
                    </div >
                </Card>
            </div>
            <div className="col-12 md:col-5 lg:col-5">
                <p>Check EMI</p>
                <Card className="emi-card">
                    <div className="flex justify-content-center flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            Check your EMI plan
                        </div>
                    </div>
                    <div className="flex justify-content-center flex-wrap ">
                        <div className="text-center emi-card-content">
                            <p>EMI PAID</p>
                            <p>2</p>
                            <p>Of 9 month plan</p>
                        </div>
                    </div>
                    <div className="flex justify-content-center flex-wrap ">
                        <div className="flex align-items-center justify-content-center ">
                            <a href="">Check EMI</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div >
    )
};
export default Thankyou