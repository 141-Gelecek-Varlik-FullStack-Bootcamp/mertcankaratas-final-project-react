import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import PaymentService from "../services/paymentService"
import { toast } from "react-toastify"
export default function PaymentAdd() {
    const initialValues = { userId: "", apartmentId: "", invoiceId: "", amount: "" }
    let paymentService = new PaymentService();
    const schema = Yup.object({
        userId: Yup.number().required("Kullanıcı id zorunludur."),
        apartmentId: Yup.number().required("Apartment id zorunludur."),
        invoiceId: Yup.number().required("Fatura tipi girmek zorunludur."),
        amount: Yup.number().required("Fatura Miktarı girmek zorunludur.")
        //insert user tokendan gelicek
    })
    const onSubmit = (values, { resetForm }) => {

        paymentService.addPayment(values).then((result) => {
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
                    <Label  color='teal'  size='large' >Kullanıcı İd</Label>
                    <Divider/>
                    <ApartmentTextInput name="userId" placeholder="5" />
                    <Divider/>

                    <Label color='teal'  size='large' >Daire İd</Label>
                    <Divider/>

                    <ApartmentTextInput name="apartmentId" placeholder="6" />
                    <Divider/>

                    <Label color='teal'  size='large'>Fatura İd</Label>
                    <Divider/>

                    <ApartmentTextInput name="invoiceId" placeholder=" 4" />
                    <Divider/>

                    <Label color='teal'  size='large'>Fatura Tutarı</Label>
                    <Divider/>

                    <ApartmentTextInput name="amount" placeholder="amount" />
                    <Divider/>




                    <Button color='green' type="submit">Fatura Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
