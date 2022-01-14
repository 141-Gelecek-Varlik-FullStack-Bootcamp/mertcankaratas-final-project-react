import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label, Input,Divider } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import ApartmentService from '../services/apartmentService'
import { toast } from "react-toastify"
export default function ApartmentAdd() {
    const initialValues = {
        duesId: "", 
        ownerId: "", 
        tenantId: "", 
        residentType: "", 
        blockNo: "",
        apartmentType:"",

    }
    let apartmentService = new ApartmentService();
    const schema = Yup.object({
        duesId: Yup.number().required("Aidat id zorunludur."),
        ownerId: Yup.number().required("Apartment id zorunludur."),
        tenantId: Yup.number(),
        residentType: Yup.string().required("İkamet tipi girmek zorunludur."),
        blockNo: Yup.string().required("Blok adı girmek zorunludur."),
        floorNo: Yup.string().required("Kat numarası girmek zorunludur."),
        doorNo: Yup.string().required("Kapı numarası girmek zorunludur."),
        apartmentType: Yup.string().required("Daire Tipi girmek zorunludur."),
    
        //insert user tokendan gelicek
    })
    const onSubmit = (values, { resetForm }) => {

        apartmentService.addApartment(values).then((result) => {
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
                    <Divider />

                    {/* <Input  type='checkbox' className='hidden' label="Daire Aktiflik durumu" name="isBlank"></Input> */}
                    <Input type="checkbox" className="hidden" name="isBlank" /><label> Daire Boşluk Durumu</label>
                    <Divider />
                    <Input type="checkbox" className="hidden" name="isActive"  /><label> Daire Aktif Durumu</label>
                    <Divider />
                    {/* <Input type="checkbox" name="isActive"></Input> */}
                    {/* <Label pointing="below" ribbon>Daire Aktiflik Durumu</Label> */}
                    {/* <ApartmentTextInput name="isActive" placeholder="pasif false - aktif true" /> */}



                    <Button color='green' type="submit">Daire Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
