import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import PaymentService from "../services/paymentService"
import { toast } from "react-toastify"
export default function PaymentAdd() {
    const initialValues = { userId: "", apartmentId: "", invoiceId: "", amount: 0 }
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
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}>
                <Form className='ui form'>
                    <Label pointing="below" color='teal' ribbon >Kullanıcı İd</Label>
                    <ApartmentTextInput name="userId" placeholder="5" />
                    <Label pointing="below" ribbon>Daire İd</Label>
                    <ApartmentTextInput name="apartmentId" placeholder="6" />
                    <Label pointing="below" ribbon>Fatura İd</Label>
                    <ApartmentTextInput name="invoiceId" placeholder=" 4" />
                    <Label pointing="below" ribbon>Fatura Tutarı</Label>
                    <ApartmentTextInput name="amount" placeholder="amount" />



                    <Button color='green' type="submit">Fatura Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
