import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import './Login.scss';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';
import * as Yup from 'yup';
import { Toast } from "primereact/toast";


const MobileInputForm = () => {
    const navigate = useNavigate();
    const toast = useRef(null);
    const [checked, setChecked] = useState(false);
    const mobileRegExp = /^\d{10}$/;
    const LoginSchema = Yup.object().shape({
        mobile: Yup
            .string()
            .required('Please Enter your Mobile Number')
            .matches(
                mobileRegExp,
                "Mobile Number is not valid"
            )
    });

    const formik = useFormik({
        initialValues: {
            mobile: '9090909090',
        },
        validate: (data) => {
            let errors = {};
            if (!data.mobile) {
                errors.mobile = 'Mobile number is required.';
            }
            return errors;
        },
        validationSchema: LoginSchema,

        onSubmit: (values) => {
            if (!checked) {
                toast.current.show({ severity: 'error', summary: '', detail: 'Please do check Preksha terms and conditions' });
                return;
            }
            doLogin(values);
        },
    });

    const doLogin = (values) => {
        if (values.mobile === '9090909090') {
            // if (isExistingUser) {
            navigate('/otp-existing-user', { state: values });
        } else {
            values.userType = 'NEW_USER';
            values.loanStatus = 'DRAFT';
            localStorage.setItem('currentUser', JSON.stringify(values));
            navigate('/new-user-home');
        }
    }

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <p className="login-title text-4xl font-semi mt-8 pt-8 mb-1">Welcome to Preskha</p>
            <p className="sub-title font-l mt-0 mb-4">Enter mobile no to login or with Google account.</p>
            <div className="flex flex-column mt-4">
                <label className="text-base mb-3 input-label" htmlFor="mobile">Mobile Number</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon addon">
                        + 91 -
                    </span>
                    <InputText placeholder="Enter your 10 digit mobile number" id="mobile"
                        name="mobile"
                        className={`login-input ${classNames({ 'p-invalid ': isFormFieldInvalid('mobile') })}`}
                        type="mobile" {...formik.getFieldProps('mobile')} />
                </div>
                {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="p-invalid">{formik.errors.mobile}</div>
                ) : null}
            </div>
            <div className="flex flex-column mt-4">
                <Button type="submit" label="Proceed to Application" className="w-full login-button" disabled={!formik.isValid} />
            </div>
            <div className="flex align-items-center mt-4">
                <Checkbox onChange={e => setChecked(e.checked)} checked={checked} />
                <span className="ml-2 text-base check-label font-l">
                    By signing in, I agree to Preksha’s&nbsp;<a htmlFor="agreeCheck" href="https://prekshaedu.com/terms.html" target="blank">Terms and Conditions</a>&nbsp;and&nbsp;<a htmlFor="agreeCheck" href="https://prekshaedu.com/privacy.html" target="blank">
                        Privacy Policy
                    </a>
                </span>
            </div>
            <Toast ref={toast} />

        </form>
    )
}


export default MobileInputForm;