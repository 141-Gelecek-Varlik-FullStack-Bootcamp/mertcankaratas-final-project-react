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
        userId: Yup.number().required("Kullanıcı No zorunludur."),
        apartmentId: Yup.number().required("Apartman No zorunludur."),
        invoiceId: Yup.number().required("Fatura No girmek zorunludur."),
        amount: Yup.number().required("Fatura Miktarı girmek zorunludur.").min(0)
        //insert user tokendan gelicek
    })
    const onSubmit = (values, { resetForm }) => {

        paymentService.addPayment(values).then((result) => {
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
                    <Label  color='teal' basic size='large' >Kullanıcı No</Label>
                    <Divider/>
                    <ApartmentTextInput icon="user" name="userId" placeholder="5" />
                    <Divider/>

                    <Label color='teal' basic size='large' >Daire No</Label>
                    <Divider/>

                    <ApartmentTextInput icon="home" name="apartmentId" placeholder="6" />
                    <Divider/>

                    <Label color='teal'basic  size='large'>Fatura No</Label>
                    <Divider/>

                    <ApartmentTextInput icon="info" name="invoiceId" placeholder=" 4" />
                    <Divider/>

                    <Label color='teal'  basic size='large'>Fatura Tutarı</Label>
                    <Divider/>

                    <ApartmentTextInput icon="money" name="amount" placeholder="amount" />
                    <Divider/>




                    <Button color='teal' size='large' type="submit">Fatura Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
