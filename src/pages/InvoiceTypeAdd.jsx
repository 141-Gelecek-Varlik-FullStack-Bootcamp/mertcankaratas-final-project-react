import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import InvoiceTypeService from '../services/invoiceTypeService'
import { toast} from "react-toastify"
export default function InvoiceTypeAdd() {
    const initialValues = { invoiceName: "", }
    let invoiceTypeService = new InvoiceTypeService();
    const schema = Yup.object({
        invoiceName: Yup.string().required("Fatura tip adı girmek zorunludur."),
        
     
        //insert user tokendan gelicek
    })

    const onSubmit = (values, { resetForm }) => {

        invoiceTypeService.addInvoice(values).then((result) => {
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
                    <Label pointing="below"color='teal'ribbon >Fatura Tipi</Label>
                    <ApartmentTextInput name="invoiceName" placeholder="Elektrik" />

                   



                    <Button color='green' type="submit">Fatura Tipi Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
