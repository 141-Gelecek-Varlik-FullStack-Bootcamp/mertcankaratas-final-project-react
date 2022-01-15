import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import InvoiceTypeService from '../services/invoiceTypeService'
import { toast} from "react-toastify"
export default function InvoiceTypeAdd() {
    const initialValues = { invoiceName: "", }
    let invoiceTypeService = new InvoiceTypeService();
    const schema = Yup.object({
        invoiceName: Yup.string().required("Fatura türü girmek zorunludur."),
        
     
        //insert user tokendan gelicek
    })

    const onSubmit = (values, { resetForm }) => {

        invoiceTypeService.addInvoice(values).then((result) => {
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
                    <Label color='teal'  size='large' >Fatura Tipi</Label>
                    <Divider/>
                    <ApartmentTextInput name="invoiceName" placeholder="Elektrik" />
                    <Divider/>
                   



                    <Button color='teal'  size='large'>Fatura Tipi Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
