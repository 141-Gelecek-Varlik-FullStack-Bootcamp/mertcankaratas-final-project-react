import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
export default function InvoiceTypeAdd() {
    const initialValues = { userId: "", apartmentId: "" }

    const schema = Yup.object({
        invoiceName: Yup.string().required("Fatura tip adı girmek zorunludur."),
        
     
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
                    <Label pointing="below"color='teal'ribbon >Fatura Tipi</Label>
                    <ApartmentTextInput name="invoiceName" placeholder="Elektrik" />

                   



                    <Button color='green' type="submit">Fatura Tipi Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
