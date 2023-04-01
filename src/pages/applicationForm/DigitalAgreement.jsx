import React, { useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PerticularsTable from "./PerticularsTable";
import EmiSchedule from "./EmiSchedule";
import LoanAgreement from "./LoanAgreement";


const DigitalAgreement = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        date: new Date().toString(),
        name: 'Dilip',
        address: 'Hyderabad',
        mobile: '7995522252',
        email: 'dilip.chandra91@gmail.com',
        applicationNumber: '123456',
        institute: 'DAV Public School',
        nbfcPartnerName: 'NBFC Partner Name'


    })
    return (
        <>
            <div className="col-12 p-5 border-gray-400 border-1 border-round mb-5">
                <div class="flex justify-content-center flex-wrap ">
                    <div class="flex align-items-center justify-content-center">
                        [ON THE LETTER HEAD OF THE LENDER]
                    </div>


                </div>
                <div class="flex justify-content-center flex-wrap mt-5 mb-5">
                    <div class="flex align-items-center justify-content-center ">
                        SANCTION LETTER
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <b>{form.date}</b>
                        <p>To,</p>
                        <p>{form.name}</p>

                        <p>{form.address}</p>

                        <p>{form.mobile}</p>
                        <p>{form.email}</p>

                        <p>Dear Sir/Madam,</p>

                        <p>Sub: Education Loan Sanction Letter.
                        </p>
                        <p>Ref: Application No.&nbsp;<span className="font-semi">{form.applicationNumber}
                        </span>&nbsp;dated&nbsp;<span className="font-semi">
                                {form.date}
                            </span>.
                        </p>
                        <p>
                            This is with reference to your above cited application and request for education loan&nbsp;<span className="font-semi">
                                {form.applicationNumber}
                            </span>&nbsp;at&nbsp;<span className="font-semi">
                                {form.institute}
                            </span>. Based on the details provided by you vide your said application, we are pleased to sanction the Loan as per terms and conditions mentioned below:-
                        </p>
                        <p>This sanction is subject to the acceptance of the terms and conditions mentioned herein and execution of loan agreement and submission of other documents as required by&nbsp;<span className="font-semi">{form.nbfcPartnerName}</span>&nbsp;from time to time.</p>
                    </div>
                </div>
                <PerticularsTable />
                <EmiSchedule />
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <p className="font-bold">
                            Additional Specific Instructions for availing the Loan:
                        </p>
                        <ol>
                            <li>Upon the Sanction Letter, the Lender shall verify PAN details of the Borrower and in this regard the Borrower shall receive an otp on the registered mobile number of the Borrower and once the same is received by the Borrower, he/she shall share the same to the Lender.
                            </li>
                            <li>Loan shall be disbursed directly into the account of the institute/school of the Borrower.</li>
                            <li>The Borrower has to sign a separate Loan Agreement and the Sanction Letter shall form an integral part of the Loan agreement.
                            </li>
                        </ol>
                    </div>
                </div>
                <LoanAgreement />
            </div>
            <div className="col-12 p-4">
                <div className="flex justify-content-between flex-wrap card-container purple-container">
                    <Button label="Back" className="p-button-outlined" />
                    <Button label="Save & Next" />
                </div>
            </div>
        </>
    )
}

export default DigitalAgreement;