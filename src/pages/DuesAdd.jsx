import '../utilities/customCSS/ApartmentFormElement.css';
import {Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import DuesService from '../services/duesService'
import { toast} from "react-toastify"
export default function DuesAdd() {
    const initialValues = {amount:""}
    let duesService = new DuesService();
    const schema = Yup.object({

        amount: Yup.number().required("Aidat tutarı zorunludur."),

        //insert user tokendan gelicek
    })
    
    const onSubmit = (values, { resetForm }) => {
       
        duesService.addDues(values).then((result) => {
            toast.success(result.data.message)
        }).catch((result) => {
            toast(result.response.data.message)
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
                    <Label color='teal' size='large' >Aidat Tutarı</Label>
                    <Divider/>
                    <ApartmentTextInput name="amount" placeholder="125" />
                    <Divider/>




                    <Button color='teal' size='large'>Aidat Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
