import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button,Label, Container, Divider,Image } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import ApartmentPasswordInput from '../utilities/customFormControls/ApartmentPasswordInput';
import AuthService from '../services/authService'
import { toast } from "react-toastify"
import jwt_decode from "jwt-decode";

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
            window.isAuthenticated=true;
            console.log(result?.data?.token)
            {
                let tokenInfo = [jwt_decode(result.data.token)]
                console.log(...tokenInfo)
            }



        }).catch((result) => {
            toast(result?.data)
        })
        setTimeout(() => {
            resetForm();
        }, 3000)
    }
    return (
        <Container className='formElement main'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}>
                    
                <Form className='ui form'>
                <Image spaced="right" size='medium' src="https://www.paraanaliz.com/wp-content/uploads/2021/09/gelecek-varlik.png"/>
                    <Divider/>
                    <Label color='teal'basic  size='large'>Email</Label>
                    <Divider/>
                    <ApartmentTextInput icon='user' name="email" placeholder="user@user.com" />
                    <Divider/>

                    <Label color='teal' basic size='large'>Parola</Label>
                    <Divider/>

                    <ApartmentPasswordInput name="password" placeholder="*****" />
                    <Divider/>

                   

                        <Button color='teal' type="submit">Login</Button>
                        
                </Form>
            </Formik>
        </Container>
    )
}
