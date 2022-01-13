import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
export default function ApartmentAdd() {
    const initialValues = { userId: "", apartmentId: "" }

    const schema = Yup.object({
        duesId: Yup.number().required("Aidat id zorunludur."),
        ownerId: Yup.number().required("Apartment id zorunludur."),
        tenantId: Yup.number(),
        residentType: Yup.string().required("İkamet tipi girmek zorunludur."),
        blockNo: Yup.string().required("Blok adı girmek zorunludur."),
        floorNo: Yup.string().required("Kat numarası girmek zorunludur."),
        doorNo: Yup.string().required("Kapı numarası girmek zorunludur."),
        apartmentType: Yup.string().required("Daire Tipi girmek zorunludur."),
        isBlank: Yup.bool().required("Dairenin doluluk durumunu girmek zorunludur."),
        isActive: Yup.bool().required("Dairenin aktiflik durumunu girmek zorunludur.")
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
                    <Label pointing="below" color='teal' ribbon >Aidat İd</Label>
                    <ApartmentTextInput name="duesId" placeholder="1" />

                    <Label pointing="below" ribbon>Daire Sahip İd</Label>
                    <ApartmentTextInput name="ownerId" placeholder="5" />

                    <Label pointing="below" ribbon>Daire Kiracı İd</Label>
                    <ApartmentTextInput name="tenantId" placeholder="4" />

                    <Label pointing="below" ribbon>İkamet Tipi</Label>
                    <ApartmentTextInput name="residentType" placeholder="Kiracı" />

                    <Label pointing="below" ribbon>Apartman Blok Adı</Label>
                    <ApartmentTextInput name="blockNo" placeholder="A" />

                    <Label pointing="below" ribbon>Kat Numarası</Label>
                    <ApartmentTextInput name="floorNo" placeholder="4" />

                    <Label pointing="below" ribbon>Kapı Numarası</Label>
                    <ApartmentTextInput name="doorNo" placeholder="1" />

                    <Label pointing="below" ribbon>Apartman Tipi</Label>
                    <ApartmentTextInput name="apartmentType" placeholder="3+1" />

                    <Label pointing="below" ribbon>Daire Durumu</Label>
                    <ApartmentTextInput name="isBlank" placeholder="boş 0  - dolu 1 " />

                    <Label pointing="below" ribbon>Daire Aktiflik Durumu</Label>
                    <ApartmentTextInput name="isActive" placeholder="aktif 1 - pasif 0" />



                    <Button color='green' type="submit">Daire Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
