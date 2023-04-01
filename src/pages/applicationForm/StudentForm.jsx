import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';
import RECEIPT from '../../assets/images/receipt.svg';
import BADGE_PERCENT from '../../assets/images/badge-percent.svg';
import BADGE_CHECK from '../../assets/images/badge-check.svg';
import THREE_MONTHS from '../../assets/images/3months.svg';
import SIX_MONTHS from '../../assets/images/6months.svg';
import NINE_MONTHS from '../../assets/images/9months.svg';
import { ProgressSpinner } from 'primereact/progressspinner';
import * as Yup from 'yup';
import './Application.scss';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import { get, post } from "../../api/services"
import { StudentFormSchema } from "../../schemas";


const StudentForm = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const initialValues = {
        instituteId: '',
        state: '',
        enrolledCourses: '',
        acdemicyear: '',
        firstName: '',
        lastName: '',
        instituteStudentId: '',
        studenttype: '',
        class: '',
        courseFee: '',
    };
    const [instituteList, setInstitutes] = useState([]);
    const [studentDetails, setStudentDetails] = useState({});
    const [tenure, setTenure] = useState(null);
    const [courseList, setCourseList] = useState([{ id: 1, course: 'Course 1' }, { id: 2, course: "Course 2" }]);
    const [showSpinner, setSpinner] = useState(false);
    const [arePlansLoaded, setPlansLoader] = useState(false);
    const [loading, setLoading] = useState(true);
    const [btnAction, setBtnAction] = useState(null);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, getFieldProps } = useFormik({
        initialValues: studentDetails || initialValues,
        validationSchema: StudentFormSchema,
        enableReinitialize: true,
        onSubmit: () => {
            if (btnAction === "SUBMIT") {
                if (!tenure) {
                    toast.current.show({ severity: 'error', summary: '', detail: 'Please select EMI Plan' });
                } else {

                    addStudent();
                }
                setBtnAction(null);
            }
        },

    });

    useEffect(() => {
        if (values.courseFee !== '') {
            setTenure(null);
            setPlansLoader(false);
            setSpinner(true);
            setTimeout(() => {
                setSpinner(false);
                setPlansLoader(true);
            }, [1000])
        } else {
            setSpinner(false);
            setPlansLoader(false);
            setTenure(null);
        }
    }, [values.courseFee]);


    useEffect(() => {
        getDropdownOptions();
    }, []);


    const getDropdownOptions = () => {
        get('/institute').then(response => {
            if (response?.status === 200) {
                setInstitutes(response.data);
                getStudentDetails(response.data);
            } else {
                toast.current.show({ severity: 'error', detail: response.statusText });
                setLoading(false);
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', detail: err });
            setLoading(false);
        })
    };


    const addStudent = () => {
        let body = { ...values };
        body['tenure'] = tenure;
        body['phone'] = currentUser.mobile;
        body['tenure'] = tenure;
        post('/addStudent', body).then(res => {
            if (res?.data?.errors) {
                toast.current.show({ severity: 'error', summary: res.data.name, detail: res.data.message });
            } else {
                // localStorage.setItem('currentUser', JSON.stringify({ ...currentUser, ...res.data }))
                toast.current.show({ severity: 'success', detail: 'Student added successfuly' });
                setTimeout(() => {
                    navigate('/application-form-two', { state: res.data });
                }, [1000]);
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', detail: err });
        })
    };

    const getStudentDetails = (institutes) => {
        get('/getStudentInfo/' + currentUser.mobile).then((response) => {
            if (response.status === 200) {
                let student = { ...response.data };
                delete student.__v;
                delete student._id;
                institutes.forEach(element => {
                    if (element._id === student.instituteId) {
                        student.state = element.state;
                        student.acdemicyear = element.acdemicyear;
                    }
                });
                setStudentDetails(student);
                setTenure(student.tenure);
                setLoading(false);
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: response.status });
                setLoading(false);
            }
        }).catch(err => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: err });
            setLoading(false);
        });
    }


    const getMeStatesList = () => {
        if (values.instituteId)
            return instituteList.filter(obj => {
                return obj._id === values.instituteId
            }).filter((v, i, a) => a.findIndex(v2 => (v2.state === v.state)) === i)
    };

    const getMeAccYearList = () => {
        if (values.instituteId)
            return instituteList.filter(obj => {
                return obj._id === values.instituteId
            }).filter((v, i, a) => a.findIndex(v2 => (v2.acdemicyear === v.acdemicyear)) === i)
    }


    return (
        <div>
            {loading ? <ProgressSpinner className="absolute top-50 left-50" /> : ''}
            <form onSubmit={handleSubmit} className="login-form">

                <div className="col-12 p-5 border-gray-400 border-1 border-round mb-5">
                    <p className="text-xl text-primary">Enter Institution Details</p>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="instituteId" className="text-regular font-l">Institute name</label>
                                <Dropdown name="instituteId" value={values.instituteId} filter options={instituteList} optionLabel="institutename" optionValue="_id" placeholder="Select Institute Name" className="w-full" onBlur={handleBlur}  {...getFieldProps('instituteId')} />
                                {touched.instituteId && errors.instituteId ? (
                                    <div className="p-invalid">{errors.instituteId}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="state" className="text-regular font-l">State</label>
                                <Dropdown name="state" value={values.state} options={getMeStatesList()} optionLabel="state" optionValue="state" placeholder="Select State" className="w-full"  {...getFieldProps('state')} onBlur={handleBlur} />
                                {touched.state && errors.state ? (
                                    <div className="p-invalid">{errors.state}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="enrolledCourses" className="text-regular font-l">Course</label>
                                <Dropdown name="enrolledCourses" value={values.enrolledCourses} options={courseList} optionLabel="course" optionValue="course" placeholder="Select Course" className="w-full" {...getFieldProps('enrolledCourses')} onBlur={handleBlur} />
                                {touched.enrolledCourses && errors.enrolledCourses ? (
                                    <div className="p-invalid">{errors.enrolledCourses}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="acdemicyear" className="text-regular font-l">Academic year/term</label>
                                <Dropdown name="acdemicyear" value={values.acdemicyear} options={getMeAccYearList()} optionLabel="acdemicyear" optionValue="acdemicyear" placeholder="Select academic year/term" className="w-full" {...getFieldProps('acdemicyear')} onBlur={handleBlur} />
                                {touched.acdemicyear && errors.acdemicyear ? (
                                    <div className="p-invalid">{errors.acdemicyear}</div>
                                ) : null}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 p-5 border-gray-400 border-1 border-round mb-5">
                    <p className="text-xl text-primary"> Enter Student Details</p>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="firstName" className="text-regular font-l">First Name</label>
                                <InputText id="firstName" value={values.firstName} placeholder="Enter First Name" className=" w-full" {...getFieldProps('firstName')} onBlur={handleBlur} />
                                {touched.firstName && errors.firstName ? (
                                    <div className="p-invalid">{errors.firstName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="lastName" className="text-regular font-l">Last Name</label>
                                <InputText id="lastName" value={values.lastName} name="lastName" placeholder="Enter Last Name" className=" w-full" {...getFieldProps('lastName')} onBlur={handleBlur} />
                                {touched.lastName && errors.lastName ? (
                                    <div className="p-invalid">{errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="instituteStudentId" className="text-regular font-l">Student ID</label>
                                <InputText id="instituteStudentId" value={values.instituteStudentId} placeholder="Enter Student ID" className=" w-full" {...getFieldProps('instituteStudentId')} onBlur={handleBlur} />
                                {touched.instituteStudentId && errors.instituteStudentId ? (
                                    <div className="p-invalid">{errors.instituteStudentId}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="studenttype" className="text-regular font-l">Student Type</label>
                                <Dropdown value={values.studenttype} options={[{ id: 1, studenttype: 'New' }, { id: 2, studenttype: 'Exist' }]} placeholder="Select Student Type" optionLabel="studenttype" optionValue="studenttype" className=" w-full" {...getFieldProps('studenttype')} onBlur={handleBlur} />
                                {touched.studenttype && errors.studenttype ? (
                                    <div className="p-invalid">{errors.studenttype}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="class" className="text-regular font-l">Class</label>
                                <InputText id="class" value={values.class} placeholder="Enter Class" className=" w-full" {...getFieldProps('class')} onBlur={handleBlur} />
                                {touched.class && errors.class ? (
                                    <div className="p-invalid">{errors.class}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <div className="field">
                                <label htmlFor="courseFee" className="text-regular font-l">Amount Required</label>
                                <InputText id="courseFee" value={values.courseFee} placeholder="Enter Amount Required" className=" w-full" {...getFieldProps('courseFee')} onBlur={handleBlur} />
                                {touched.courseFee && errors.courseFee ? (
                                    <div className="p-invalid">{errors.courseFee}</div>
                                ) : null}
                            </div>
                        </div>

                    </div>
                </div>
                {arePlansLoaded && <div className="col-12 p-4 mb-5">
                    <p className="text-xl text-primary">Select your Payment Plan</p>
                    <div className="grid ">
                        <div className="col-12 md:col-4 lg:col-4 pl-6 pr-6">
                            <Card className="form-payment-card relative">
                                <img src={THREE_MONTHS} alt="3 months" className="absolute top-0 right-0 border-round-right-sm" />
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
                                <Button label="Select Plan" className={`w-full mt-3 ${tenure === 3 ? 'p-button' : 'p-button-outlined'}`} onClick={() => { setTenure(3) }} />
                            </Card>
                        </div>
                        <div className="col-12 md:col-4 lg:col-4 pl-6 pr-6">
                            <Card className="form-payment-card relative">
                                <img src={SIX_MONTHS} alt="6 months" className="absolute top-0 right-0 border-round-right-sm" />
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
                                <Button label="Select Plan" className={`w-full mt-3 ${tenure === 6 ? 'p-button' : 'p-button-outlined'}`} onClick={() => { setTenure(6) }} />
                            </Card>
                        </div>
                        <div className="col-12 md:col-4 lg:col-4 pl-6 pr-6">
                            <Card className="form-payment-card relative">
                                <img src={NINE_MONTHS} alt="9 months" className="absolute top-0 right-0 border-round-right-sm" />
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
                                <Button label="Select Plan" className={`w-full mt-3 ${tenure === 9 ? 'p-button' : 'p-button-outlined'}`} onClick={() => { setTenure(9) }} />
                            </Card>
                        </div>
                    </div>

                </div>}
                {showSpinner && < div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>}

                <div className="col-12 p-4 mb-5">
                    <div className="flex justify-content-center flex-wrap card-container yellow-container">
                        <div className="flex align-items-center justify-content-center">
                            <Button type="submit" label="Proceed to Application" className="w-full login-button" onClick={() => { setBtnAction('SUBMIT') }} />
                        </div>
                    </div>
                </div>
            </form>
            <Toast ref={toast} />
        </div>

    )
}

export default StudentForm;