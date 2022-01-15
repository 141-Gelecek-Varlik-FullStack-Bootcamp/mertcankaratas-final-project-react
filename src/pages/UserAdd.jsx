import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import UserService from "../services/userService"
import { toast } from "react-toastify"
export default function UserAdd() {
    const initialValues = { identityNo: "", firstName: "", lastName: "", email: "", password: "", plaka: "" }
    let userService = new UserService();
    const schema = Yup.object({
        identityNo: Yup.string().required("Kimlik numarası zorunludur.").min(11).max(11),
        firstName: Yup.string().required("Ad girmek zorunludur."),
        lastName: Yup.string().required("soyad girmek zorunludur."),
        email: Yup.string().required("Email adresi girmek zorunludur."),
        password: Yup.string().required("Parola girmek zorunludur."),
        plaka: Yup.string()

        //insert user tokendan gelicek
    })

    var password = document.getElementById("password");

    function genPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("password").value = password;
    }


    const onSubmit = (values, { resetForm }) => {

        userService.addUser(values).then((result) => {
            toast.success(result?.data?.message)
        }).catch((result) => {
            toast(result?.data?.message)
            // toast("hataaa")

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
                    <Label color='teal' size='large'>Kimlik No</Label>
                    <Divider />
                    <ApartmentTextInput name="identityNo" placeholder="12345678901" />
                    <Divider />

                    <Label color='teal' size='large'>Ad</Label>
                    <Divider />

                    <ApartmentTextInput name="firstName" placeholder="Mertcan" />
                    <Divider />

                    <Label color='teal' size='large'>Soyad</Label>
                    <Divider />

                    <ApartmentTextInput name="lastName" placeholder="Karataş" />
                    <Divider />

                    <Label color='teal' size='large'>Email</Label>
                    <Divider />

                    <ApartmentTextInput name="email" placeholder="mertcan@mertcan.com" />
                    <Divider />

                    <Label color='teal' size='large'>Parola</Label>
                    <Divider />

                    <ApartmentTextInput name="password" placeholder="4" />
                    <Divider />


                    <Label color='teal' size='large'>Plaka</Label>
                    <Divider />

                    <ApartmentTextInput name="plaka" placeholder="34mcn34" />
                    <Divider />






                    <Button color='teal' size='large'>Kullanıcı Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
