import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../utilities/customCSS/ApartmentFormElement.css';
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { Button, Container, Divider, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import PaymentService from "../services/paymentService"
import { toast } from "react-toastify"

export default function PaymentUpdate() {

    const [payments, setPayments] = useState({})
    let { id } = useParams()

    const schema = Yup.object({
        userId: Yup.number().required("Kullanıcı id zorunludur."),
        apartmentId: Yup.number().required("Apartment id zorunludur."),
        invoiceId: Yup.number().required("Fatura tipi girmek zorunludur."),
        amount: Yup.number().required("Fatura Miktarı girmek zorunludur.").min(0)
        
    })

    let paymentService = new PaymentService();

    const loadPost = async () => {
        await paymentService.getById(id).then(result => setPayments(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])


   

    const initialValues = {
        paymentId: `${payments.paymentId}`,
        userId: `${payments.userId}`,
        apartmentId: `${payments.apartmentId}`,
        invoiceId: `${payments.invoiceId}`,
        amount: `${payments.amount}`,
        // successPayment:`${payment.successPayment}`,
        // billingDate:`${payment.billingDate}`,
      
    }
    const onSubmit = (values, { resetForm }) => {

        paymentService.updatePayment(values).then((result) => {
            toast.success(result?.data?.message)
        }).catch((result) => {
             toast(result?.data?.message)
            
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




                    <Button color='teal' data-tooltip="Faturanızı Güncelle" data-position="bottom left"  size='large' type="submit" >Fatura Güncelle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
