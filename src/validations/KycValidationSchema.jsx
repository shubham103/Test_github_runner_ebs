import * as Yup from 'yup';
import { useFormik } from "formik";

const mobileRegExp = /^\d{10}$/;

const KycFormSchema = Yup.object({
    pan: Yup.string().required('Please Enter your PAN')
        .matches(
            mobileRegExp,
            "PAN is not valid"
        )
});

export default KycFormSchema;