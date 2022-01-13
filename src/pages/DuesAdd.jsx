import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
export default function DuesAdd() {
    const initialValues = { userId: "", apartmentId: "" }

    const schema = Yup.object({
    
        amount: Yup.number().required("Aidat tutarı zorunludur."),
     
        //insert user tokendan gelicek
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) =>
                    console.log(values)}>
                <Form className='ui form'>
                    <Label pointing="below"color='teal'ribbon>Aidat Tutarı</Label>
                    <ApartmentTextInput name="amount" placeholder="125" />

                    



                    <Button color='green' type="submit">Aidat Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
