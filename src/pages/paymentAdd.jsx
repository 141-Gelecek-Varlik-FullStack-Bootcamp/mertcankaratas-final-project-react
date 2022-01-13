import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
export default function paymentAdd() {
    const initialValues = { userId: "", apartmentId: "" }

    const schema = Yup.object({
        userId: Yup.number().required("Kullanıcı id zorunlu"),
        apartmentId: Yup.number().required("Apartment id zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) =>
                    console.log(values)}>
                <Form className='ui form'>
                    <ApartmentTextInput name="userId" placeholder="User Id"/>
                    {/* <FormField>
                        <Field name="userId" placeholder="User Id"></Field>
                        <ErrorMessage name="userId" render={error=>
                            <Label pointing basit color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <FormField>
                        <Field name="apartmentId" placeholder="Apartment Id"></Field>
                        <ErrorMessage name="apartmentId" render={error=>
                            <Label pointing basit color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <Button color='green' type="submit"></Button>
                </Form>
            </Formik>
        </div>
    )
}
