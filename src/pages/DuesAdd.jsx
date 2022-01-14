import {Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import DuesService from '../services/duesService'
import { toast} from "react-toastify"
export default function DuesAdd() {
    const initialValues = {amount:0}
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

        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}>
                <Form className='ui form'>
                    <Label pointing="below" color='teal' ribbon>Aidat Tutarı</Label>
                    <ApartmentTextInput name="amount" placeholder="125" />





                    <Button color='green' type="submit">Aidat Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
