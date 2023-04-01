import React, { useState, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from "react-router-dom";
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
import { Calendar } from 'primereact/calendar';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import { KycSchema } from "../../schemas";
import OtpPopup from "../../components/otpPopup/OtpPopup";
import { post } from "../../api/services";
import { ProgressSpinner } from "primereact/progressspinner";

const initialValues = {
    PANCard: '',
    FirstName: '',
    LastName: '',
    ContactNumber: '',
    Email: '',
    DOB: '',
    MaritalStatus: '',
    Gender: '',
    EmploymentType: '',
    yearsOfExp: '',
    PrimaryAddressLine1: ''
}

const KycForm = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [termsCheck, setTermsCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, getFieldProps } = useFormik({
        initialValues: initialValues,
        validationSchema: KycSchema,
        onSubmit: () => {
            if (termsCheck) {
                setLoading(true);
                saveParentDetails();
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: "Please indicate that you accept the Terms and Conditions" });
            }
        }
    });

    const saveParentDetails = () => {
        values['CustomerId'] = 0;
        values['Salutation'] = "Ms";
        values["PrimaryArea"] = "Madhapur";
        values["PrimaryTown"] = "Hyderabad";
        values["PrimaryPostcode"] = "500081";
        values["PrimaryStateId"] = 25;
        values["ResidentTypeId"] = "Own";
        values["PrimaryStateName"] = "Telangana";
        post('/cloud/addParent', values).then(res => {
            console.log('res', res);
            if (res.status === 200) {
                verifyPan();
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: err });
            setLoading(false);
        });
    };

    const verifyPan = () => {
        post('/scoreme/panVerify', {
            "panNumber": "DZEPK9657M",
            "fullName": "MAHENDRA KUMAR THANEERU",
            "status": "INDIVIDUAL",
            "dateOfBirth": "17-FEB-1995"
        }).then(res => {
            if (res.status === 200) {
                setVisible(true);
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: res.data.message });
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: err });
        })
    };

    const onUpload = (e) => {
        post('/api/cloud/addParent', values).then(res => {
            if (res.status === 200) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: "Parent data saved successfuly" });
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: res.status });
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: err });
        });
    }

    return (
        <>
            {loading ? <ProgressSpinner className="absolute top-50 left-50" /> : ''}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="col-12 p-5 border-gray-400 border-1 border-round mb-5">
                    <p className="text-xl text-primary">Enter KYC Details</p>
                    <div className="grid">
                        <div className="col-12 md:col-12 lg:col-12">
                            <div className="field">
                                <label htmlFor="PANCard" className="text-regular font-l">PAN Card no</label>
                                <InputText id="PANCard" value={values.PANCard} className=" w-full" placeholder="Enter PAN Number" onBlur={handleBlur} onChange={handleChange} />
                                {touched.PANCard && errors.PANCard ? (
                                    <div className="p-invalid">{errors.PANCard}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-4 border-gray-400 border-1 border-round mb-3">
                    <p className="text-xl text-primary">Enter Parent Details</p>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="FirstName" className="text-regular font-l">First Name</label>
                                <InputText id="FirstName" placeholder="Name as per PAN card" value={values.FirstName} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.FirstName && errors.FirstName ? (
                                    <div className="p-invalid">{errors.FirstName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="LastName" className="text-regular font-l">Last Name</label>
                                <InputText id="LastName" placeholder="Name as per PAN card" value={values.LastName} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.LastName && errors.LastName ? (
                                    <div className="p-invalid">{errors.LastName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="ContactNumber" className="text-regular font-l">Phone Number</label>
                                <InputText id="ContactNumber" placeholder="Phone no. as per PAN card" value={values.ContactNumber} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.ContactNumber && errors.ContactNumber ? (
                                    <div className="p-invalid">{errors.ContactNumber}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="Email" className="text-regular font-l">Email</label>
                                <InputText id="Email" placeholder="Email as per PAN card" value={values.Email} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.Email && errors.Email ? (
                                    <div className="p-invalid">{errors.Email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="flex-auto field">
                                <label htmlFor="calendar-12h" className="text-regular font-l">
                                    Date of Birth
                                </label>
                                <Calendar value={values.DOB} showIcon className="w-full" placeholder="dd/mm/yyyy" onBlur={handleBlur} onChange={handleChange} {...getFieldProps('DOB')} />
                                {touched.DOB && errors.DOB ? (
                                    <div className="p-invalid">{errors.DOB}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="MaritalStatus" className="text-regular font-l">Marital Status</label>
                                <Dropdown value={values.MaritalStatus} options={[{ label: 'Married', value: 'married' }, { label: 'Single', value: 'single' }]} optionValue="value" optionLabel="label" placeholder="Select Gender" className="w-full" onBlur={handleBlur} onChange={handleChange}
                                    {...getFieldProps('MaritalStatus')} />
                                {touched.MaritalStatus && errors.MaritalStatus ? (
                                    <div className="p-invalid">{errors.MaritalStatus}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="Gender" className="text-regular font-l">Gender</label>
                                <Dropdown value={values.Gender} options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} optionLabel="label" optionValue="value" placeholder="Select Gender" className="w-full" onBlur={handleBlur} onChange={handleChange}
                                    {...getFieldProps('Gender')} />
                                {touched.Gender && errors.Gender ? (
                                    <div className="p-invalid">{errors.Gender}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="EmploymentType" className="text-regular font-l">Employment Type</label>
                                <Dropdown value={values.EmploymentType} options={[{ label: 'Salaried', value: 'Salaried' }, { label: 'Self Employed', value: 'Self Employed' }, { label: 'Business', value: 'Business' }]} optionLabel="label" optionValue="value" placeholder="Select Employment Type" className="w-full" onBlur={handleBlur} onChange={handleChange}
                                    {...getFieldProps('EmploymentType')} />
                                {touched.EmploymentType && errors.EmploymentType ? (
                                    <div className="p-invalid">{errors.EmploymentType}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="yearsOfExp" className="text-regular font-l">Years of Experience (At present company)</label>
                                <InputText id="yearsOfExp" placeholder="Enter in no. of years" value={values.yearsOfExp} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.yearsOfExp && errors.yearsOfExp ? (
                                    <div className="p-invalid">{errors.yearsOfExp}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="PrimaryAddressLine1" className="text-regular font-l">Address</label>
                                <InputText id="PrimaryAddressLine1" placeholder="Enter Your Address" value={values.PrimaryAddressLine1} className=" w-full" onBlur={handleBlur} onChange={handleChange} />
                                {touched.PrimaryAddressLine1 && errors.PrimaryAddressLine1 ? (
                                    <div className="p-invalid">{errors.PrimaryAddressLine1}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-4 ">
                    <p className="text-xl text-primary">Upload Documents</p>
                    <div className="p-4 border-dotted border-blue-500 border-round-md">
                        <div className="flex justify-content-center flex-wrap card-container yellow-container">
                            <p className="font-l text-sm">Upload Bank last 3 months Statement or Form 26AS </p>
                        </div>
                        <div className="flex justify-content-center flex-wrap card-container yellow-container">
                            <p className="font-l text-sm">Drag & drop here</p>
                        </div>
                        <div className="flex justify-content-center flex-wrap card-container yellow-container">
                            <b className="text-regular font-l" >Please Note: </b>
                            <p className="m-0 text-regular font-l">Your Credit Score will not be impacted by this. </p>
                        </div>
                        <div className="flex justify-content-center flex-wrap card-container yellow-container mt-4">
                            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept=".pdf" maxFileSize={1000000} chooseLabel="Upload" onUpload={onUpload} />
                        </div>
                    </div>
                </div>
                <div className="col-12 pl-4 pr-4 md:col-12 lg:col-12">
                    <div className="flex align-items-center mt-3">
                        <Checkbox checked={termsCheck} onChange={e => setTermsCheck(e.checked)} />
                        <label htmlFor="agreeCheck" className="ml-2 text-base check-label font-l">I hereby authorize
                            Preksha Edutech/NBFC lending partners to obtain my Credit Bureau reports and I also accept the Terms and Conditions and Privacy Policy of Preksha Edutech</label>
                    </div>
                </div>
                <div className="col-12 p-4">
                    <div className="flex justify-content-between flex-wrap card-container purple-container">
                        <Button label="Back" className="p-button-outlined" onClick={() => { navigate('/application-form-one') }} />
                        <Button label="Save & Next" type="submit" />
                    </div>
                </div>
                <OtpPopup visible={visible} hidePop={() => setVisible(false)} />
                <Toast ref={toast} />
            </form>
        </>
    )
}

export default KycForm;