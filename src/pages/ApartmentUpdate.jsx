import '../utilities/customCSS/ApartmentFormElement.css';
import {Form,Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from "yup"
import { Button, Label, Input,Divider, Container } from 'semantic-ui-react'
import ApartmentTextInput from '../utilities/customFormControls/ApartmentTextInput'
import ApartmentService from '../services/apartmentService'
import { toast } from "react-toastify"
export default function ApartmentUpdate() {
    let { id } = useParams()
    const [apartments, setApartments] = useState({})
    let apartmentService = new ApartmentService();
    const loadPost = async () => {
        await apartmentService.getById(id).then(result => setApartments(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])
   
    const initialValues = {
        apartmentId:`${apartments.apartmentId}`,
        duesId: `${apartments.duesId}`, 
        ownerId: `${apartments.ownerId}`, 
        tenantId: `${apartments.tenantId}`, 
        residentType: `${apartments.residentType}`, 
        blockNo: `${apartments.blockNo}`,
        floorNo:`${apartments.floorNo}`,
        doorNo:`${apartments.doorNo}`,
        apartmentType:`${apartments.apartmentType}`,
        

    }
    
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

        apartmentService.updateApartment(values).then((result) => {
            toast.success(result?.data?.message)
        }).catch((result) => {
            toast(result?.data?.message)
        })
      
    }

   
    return (
        <Container className='formElement main'>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                enableReinitialize={true}
                onSubmit={onSubmit}>
                <Form className='ui form'>
                    
                  <Label color='teal'  size='large'>Aidat Numarası</Label>
                  <Divider />
                    <ApartmentTextInput  name="duesId" placeholder="1" />
                    <Divider/>
                    <Label color='teal' size='large'>Daire Sahip Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput  name="ownerId" placeholder="5" />
                    
                    <Divider />   
                    <Label color='teal' size='large'>Daire Kiracı Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput name="tenantId" placeholder="4" />
                    <Divider/>
                    <Label color='teal' size='large'>İkamet Tipi</Label>
                    <Divider/>
                    <ApartmentTextInput name="residentType" placeholder="Kiracı" />
                    <Divider/>
                    <Label color='teal' size='large'>Blok Adı</Label>
                    <Divider/>
                    <ApartmentTextInput name="blockNo" placeholder="A" />
                    <Divider/>
                    <Label color='teal' size='large'>Kat Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput name="floorNo" placeholder="4" />
                    <Divider/>
                    <Label color='teal' size='large'>Kapı Numarası</Label>
                    <Divider/>
                    <ApartmentTextInput name="doorNo" placeholder="1" />
                    <Divider/>

                    <Label color='teal' size='large'>Apartman Tipi</Label>
                    <Divider/>
                    <ApartmentTextInput name="apartmentType" placeholder="3+1" />
                    <Divider />

                   
                    <Divider/>
                    <Input type="checkbox" defaultChecked={apartments.isBlank} className="hidden" 
                     name="isBlank" /><label> Daire Boşluk Durumu</label>
                    <Divider />
                    <Input type="checkbox" className="hidden" defaultChecked={apartments.isActive}  name="isActive"  /><label> Daire Aktif Durumu</label>
                    <Divider />
                    
                 



                    <Button color='teal' size='large'>Daire Güncelle</Button>
                </Form>
            </Formik>
        </Container>
    )
}
