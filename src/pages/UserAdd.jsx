import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import ApartmentPasswordInput from '../utilities/customFormControls/ApartmentPasswordInput';
import UserService from "../services/userService"
import { toast } from "react-toastify"
export default function UserAdd() {
    function genPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let passwordLength = 8;
        let password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
       return password;
    }
   let passs = genPassword();
    console.log(passs);
    const initialValues = { identityNo: "", firstName: "", lastName: "", email: "", password: `${passs}`, plaka: "" }
    let userService = new UserService();
    const schema = Yup.object({
        identityNo: Yup.string().required("Kimlik numarası zorunludur.").min(11).max(11),
        firstName: Yup.string().required("Ad girmek zorunludur."),
        lastName: Yup.string().required("soyad girmek zorunludur."),
        email: Yup.string().required("Email adresi girmek zorunludur."),
        password: Yup.string().required("Parola girmek zorunludur."),
        plaka: Yup.string()

       
    })

  

   


    const onSubmit = (values, { resetForm }) => {

        userService.addUser(values).then((result) => {
            toast.success(result?.data?.message)
        }).catch((result) => {
            toast(result?.data?.message)
            

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
                    <Label color='teal' basic size='large'>Kimlik No</Label>
                    <Divider />
                    <ApartmentTextInput icon="user" name="identityNo" placeholder="12345678901" />
                    <Divider />

                    <Label color='teal' basic size='large'>Ad</Label>
                    <Divider />

                    <ApartmentTextInput icon="user" name="firstName" placeholder="Mertcan" />
                    <Divider />

                    <Label color='teal' basic size='large'>Soyad</Label>
                    <Divider />

                    <ApartmentTextInput icon="user" name="lastName" placeholder="Karataş" />
                    <Divider />

                    <Label color='teal' basic size='large'>Email</Label>
                    <Divider />

                    <ApartmentTextInput icon="mail" name="email" placeholder="mertcan@mertcan.com" />
                    <Divider />

                    <Label color='teal' basic size='large'>Parola</Label>
                    <Divider />

                    <ApartmentPasswordInput disabled={true} name="password" placeholder="*************" />
                    <Divider />


                    <Label color='teal' basic size='large'>Plaka</Label>
                    <Divider />

                    <ApartmentTextInput  icon="car" name="plaka" placeholder="34mcn34" />
                    <Divider />






                    <Button color='teal' size='large'>Kullanıcı Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
