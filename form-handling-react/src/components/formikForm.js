import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export default function formikForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    username: Yup.string().required('Username is required'),
                    email: Yup.string().email('Enter a valid email address').required('Email is required'),
                    password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
                })}
                onSubmit={values=>{
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <h1>Formik Form</h1>
                    <Field type='text' name='username' placeholder='User Name' />
                    <ErrorMessage name='username' />
                    <Field type='email' name='email' placeholder='Email' />
                    <ErrorMessage name='email' />
                    <Field type='password' name='password' placeholder='Password' />
                    <ErrorMessage name='password' />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
