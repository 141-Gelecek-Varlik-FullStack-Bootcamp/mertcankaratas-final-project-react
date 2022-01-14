import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import AuthService from '../services/authService'
import { toast} from "react-toastify"


export default function Login() {
    const initialValues = { email: "", password: "" }
    
    let authService = new AuthService();
    const schema = Yup.object({
        email: Yup.string().required("Email adresi girmek zorunludur."),
        password: Yup.string().required("Parola girmek zorunludur."),
        //insert user tokendan gelicek
    })


    const onSubmit = (values, { resetForm }) => {

        authService.login(values).then((result) => {
            //toast.success(result.data)
             console.log(result.data)
            
        }).catch((result) => {
            toast(result.response.data)
        })
        setTimeout(() => {
            resetForm();
        }, 3000)
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit }>
                <Form className='ui form'>
                    <Label pointing="below" ribbon>Email</Label>
                    <ApartmentTextInput name="email" placeholder="mertcan@mertcan.com" />

                    <Label pointing="below" ribbon>Parola</Label>
                    <ApartmentTextInput name="password" placeholder="4" />



                    <Button color='green' type="submit">Login</Button>
                </Form>
            </Formik>
        </div>
    )
}
