import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import PaymentService from "../services/paymentService"
import { toast } from "react-toastify"

export default function PaymentDetail() {

    const [payment, setPayment] = useState({})
    let { id } = useParams()

    const schema = Yup.object({
        userId: Yup.number().required("Kullanıcı id zorunludur."),
        apartmentId: Yup.number().required("Apartment id zorunludur."),
        invoiceId: Yup.number().required("Fatura tipi girmek zorunludur."),
        amount: Yup.number().required("Fatura Miktarı girmek zorunludur.").min(0)
        
    })

    let paymentService = new PaymentService();

    const loadPost = async () => {
        await paymentService.getById(id).then(result => setPayment(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])


   

    const initialValues = {
        paymentId: `${payment.paymentId}`,
        userId: `${payment.userId}`,
        apartmentId: `${payment.apartmentId}`,
        invoiceId: `${payment.invoiceId}`,
        amount: `${payment.amount}`,
        // successPayment:`${payment.successPayment}`,
        // billingDate:`${payment.billingDate}`,
      
    }
    const onSubmit = (values, { resetForm }) => {

        paymentService.updatePayment(values).then((result) => {
            toast.success(result.data.message)
        }).catch((result) => {
            // toast(result.data.message)
            console.log(result)
        })
        // setTimeout(() => {
        //     resetForm();
           
        // }, 3000)
    }




 
    return (
        <Container className='formElement main'>
            <Formik

                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={schema}
                onSubmit={onSubmit}

            >

                <Form className='ui form'>
                    <Label color='teal' size='large' >Kullanıcı İd</Label>
                    <Divider />
                    <ApartmentTextInput name="userId" placeholder="5" />
                    <Divider />

                    <Label color='teal' size='large' >Daire İd</Label>
                    <Divider />

                    <ApartmentTextInput name="apartmentId" placeholder="6" />
                    <Divider />

                    <Label color='teal' size='large'>Fatura İd</Label>
                    <Divider />

                    <ApartmentTextInput name="invoiceId" placeholder=" 4" />
                    <Divider />

                    <Label color='teal' size='large'>Fatura Tutarı</Label>
                    <Divider />

                    <ApartmentTextInput name="amount" placeholder="amount" />
                    <Divider />




                    <Button color='teal' size='large' type="submit" >Fatura Güncelle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
