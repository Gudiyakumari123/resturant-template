import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CodeHighlight from '../components/highlight';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import { setPageTitle } from '../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconBell from '../components/Icon/IconBell';
import IconCode from '../components/Icon/IconCode';
import CardProfile from './CardProfile.jsx';
import CardLogo from './Logo.jsx';

const GeneralSettings = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Validation'));
    });
    const submitForm = () => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Form submitted successfully',
            padding: '10px 20px',
        });
    };

    const submitForm4 = Yup.object().shape({
        name: Yup.string().required('Please provide a name'),
    });

    const [codeArr, setCodeArr] = useState<string[]>([]);

    return (
        <div>
            {/* <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Validation</span>
                </li>
            </ul> */}
            <div className="pt-5 space-y-8">
                <div className="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap">
                    <span className="ltr:mr-3 rtl:ml-3">General Settings </span>
                </div>

                <div className="panel ml-200" id="custom_styles">
                    <div className="mb-5">
                        <Formik
                            initialValues={{
                                name: '',
                            }}
                            validationSchema={submitForm4}
                            onSubmit={() => {}}
                        >
                            {({ errors, submitCount, touched, values }) => (
                                <Form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className={submitCount ? (errors.name ? 'has-error' : 'has-success') : ''}>
                                            <label htmlFor="customeState">CRM Name</label>
                                            <Field name="state" type="text" id="customeState" placeholder="Enter Name" className="form-input" />
                                            {submitCount ? errors.name ? <div className="text-danger mt-1">{errors.name}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                                        </div>

                                        <div>
                                            <label htmlFor="customeZip">CRM Mode</label>
                                            <div className="flex  gap-8">
                                                
                                                <label className="inline-flex">
                                                    <input type="radio" name="default_radio" className="form-radio text-success" />
                                                    <span>Live</span>
                                                </label>
                                                <label className="inline-flex">
                                                    <input type="radio" name="default_radio" className="form-radio" defaultChecked />
                                                    <span>Maintanance</span>
                                                </label>
                                               
                                              
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className={submitCount ? (errors.name ? 'has-error' : 'has-success') : ''}>
                                            <label htmlFor="customeState">Logo</label>
                                            <CardProfile />
                                        </div>

                                        <div className={submitCount ? (errors.name ? 'has-error' : 'has-success') : ''}>
                                            <label htmlFor="customeZip">Fav Icon</label>
                                            <CardLogo />
                                            {/* <CardProfile /> */}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-gradient !mb-5  border-0 uppercase text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500"
                                        onClick={() => {
                                            if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                                                submitForm();
                                            }
                                        }}
                                    >
                                        UpDate
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;
