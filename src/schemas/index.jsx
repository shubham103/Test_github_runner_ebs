import * as Yup from 'yup';
const panRegex = /([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expRegex = /^\d+$/;
const mobileRegExp = /^\d{10}$/;

export const StudentFormSchema = Yup.object({
    instituteId: Yup
        .string().required('Institute Name is required'),
    state: Yup
        .string().required('State is required'),
    enrolledCourses: Yup
        .string().required('Course is required'),
    acdemicyear: Yup
        .string().required('Academic Year is required'),
    firstName: Yup
        .string().required('First Name is required'),
    lastName: Yup
        .string().required('Last Name is required'),
    instituteStudentId: Yup
        .string().required('Student ID is required'),
    studenttype: Yup
        .string().required('Student Type is required'),
    class: Yup
        .string().required('Class is required'),
    courseFee: Yup.string().required('Amount Required is required').matches(
        expRegex,
        "Amount Required is not valid"
    ),
});

export const KycSchema = Yup.object({
    PANCard: Yup.string().required('PAN is required')
        .matches(
            panRegex,
            "PAN is not valid"
        ),
    FirstName: Yup.string().required('First Name is required'),
    LastName: Yup.string().required('Last Name is required'),
    ContactNumber: Yup.string().required('Phone Number is required').matches(
        mobileRegExp,
        "Phone Number is not valid"
    ),
    Email: Yup.string().required('Email is required').matches(
        emailRegex,
        "Email is not valid"
    ),
    DOB: Yup.string().required('Date of Birth is required'),
    MaritalStatus: Yup.string().required('Marital Status is required'),
    Gender: Yup.string().required('Gender is required'),
    EmploymentType: Yup.string().required('Employee Type is required'),
    yearsOfExp: Yup.string().required('Years of Experience is required').matches(
        expRegex,
        "Years of Experience is not valid"
    ),
    PrimaryAddressLine1: Yup.string().required('Address is required'),
});