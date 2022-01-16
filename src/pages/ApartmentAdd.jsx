import '../utilities/customCSS/ApartmentFormElement.css';
import {Form,Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, Label, Input,Divider, Container } from 'semantic-ui-react'
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
        duesId: Yup.number().required("Aidat No zorunludur."),
        ownerId: Yup.number().required("Apartment No zorunludur."),
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
                    
                  <Label color='teal'  basic size='large'>Aidat Numarası</Label>
                  <Divider />
                    <ApartmentTextInput icon="user" name="duesId" placeholder="1" />
                    <Divider/>
                    <Label color='teal' basic size='large'>Daire Sahip Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput  icon="user" name="ownerId" placeholder="5" />
                    
                    <Divider />   
                    <Label color='teal' basic size='large'>Daire Kiracı Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput icon="user" name="tenantId" placeholder="4" />
                    <Divider/>
                    <Label color='teal' basic  size='large'>İkamet Tipi</Label>
                    <Divider/>
                    <ApartmentTextInput icon="home" name="residentType" placeholder="Kiracı" />
                    <Divider/>
                    <Label color='teal' basic size='large'>Blok Adı</Label>
                    <Divider/>
                    <ApartmentTextInput icon="home"  name="blockNo" placeholder="A" />
                    <Divider/>
                    <Label color='teal' basic size='large'>Kat Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput  icon="home"  name="floorNo" placeholder="4" />
                    <Divider/>
                    <Label color='teal' basic size='large'>Kapı Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput icon="home"  name="doorNo" placeholder="1" />
                    <Divider/>

                    <Label color='teal' basic size='large'>Apartman Tipi</Label>
                    <Divider/>
                    <ApartmentTextInput icon="home" name="apartmentType" placeholder="3+1" />
                    <Divider />

          
                    <Divider/>
                    <Input type="checkbox" className="hidden" name="isBlank" /><label> Daire Boşluk Durumu</label>
                    <Divider />
                    <Input type="checkbox" className="hidden" name="isActive"  /><label> Daire Aktif Durumu</label>
                    <Divider />
                  


                    <Button color='teal' size='large'>Daire Ekle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
