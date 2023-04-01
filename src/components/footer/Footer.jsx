import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import WHATSAPP from '../../assets/whatsapp.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="desktop pt-3 pb-3 border-top-1 border-300">
                <div className="flex justify-content-between flex-wrap">
                    <div className="flex align-items-center ">
                        <div className="flex align-items-center pl-2">
                            <span>
                                <img src={WHATSAPP} alt="whatsapp" className="profile-pic" />
                            </span>
                            Get status updates on whatsapp</div>

                    </div>
                    <div className="flex align-items-center justify-content-center w-4 pr-2">
                        <div className="p-inputgroup">
                            <InputText placeholder="Enter your whatsapp number" />
                            <Button label="Submit" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="flex flex-column">
                    <div className="flex align-items-center justify-content-center m-2">
                        <span>
                            <img src={WHATSAPP} alt="whatsapp" className="profile-pic" />
                        </span>Get status updates on whatsapp</div>
                    <div className="flex align-items-center justify-content-center h-4rem  m-2">
                        <div className="grid p-fluid">
                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Enter your whatsapp number" />
                                    <Button label="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;