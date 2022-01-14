import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import UserService from"../services/userService"
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


    const onSubmit = (values, { resetForm }) => {

        userService.addUser(values).then((result) => {
            toast.success(result.data.message)
        }).catch((result) => {
            toast(result.response.data.message)
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
                onSubmit={onSubmit}>
                <Form className='ui form'>
                    <Label pointing="below" color='teal' ribbon >Kimlik No</Label>
                    <ApartmentTextInput name="identityNo" placeholder="12345678901" />

                    <Label pointing="below" ribbon>Ad</Label>
                    <ApartmentTextInput name="firstName" placeholder="Mertcan" />

                    <Label pointing="below" ribbon>Soyad</Label>
                    <ApartmentTextInput name="lastName" placeholder="Karataş" />

                    <Label pointing="below" ribbon>Email</Label>
                    <ApartmentTextInput name="email" placeholder="mertcan@mertcan.com" />

                    <Label pointing="below" ribbon>Parola</Label>
                    <ApartmentTextInput name="password" placeholder="4" />

                    <Label pointing="below" ribbon>Plaka</Label>
                    <ApartmentTextInput name="plaka" placeholder="34mcn34" />





                    <Button color='green' type="submit">Daire Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
