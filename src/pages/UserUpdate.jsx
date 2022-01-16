import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import ApartmentPasswordInput from '../utilities/customFormControls/ApartmentPasswordInput';
import UserService from "../services/userService"
import { toast } from "react-toastify"
export default function UserUpdate() {
    let { id } = useParams()
    const [user, setUser] = useState({})
    let userService = new UserService();
    const initialValues = {
        userId:`${user.userId}`,
        identityNo: `${user.identityNo}`,
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        email: `${user.email}`,
        password: `${user.password}`,
        plaka: `${user.plaka}`
    }

    const loadPost = async () => {
        await userService.getById(id).then(result => setUser(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])
   
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

        userService.updateUser(values).then((result) => {
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
                enableReinitialize={true}
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

                    <ApartmentPasswordInput disabled={true} name="password" placeholder="*************" />

                    <Label color='teal' size='large'>Plaka</Label>
                    <Divider />

                    <ApartmentTextInput name="plaka" placeholder="34mcn34" />
                    <Divider />






                    <Button color='teal' size='large'>Kullanıcı Güncelle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
