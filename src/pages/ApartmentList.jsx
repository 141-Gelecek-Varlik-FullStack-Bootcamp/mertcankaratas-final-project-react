import '../utilities/customCSS/ApartmentFormElement.css';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container, Icon, Menu, Table, TableHeader } from 'semantic-ui-react'
import ApartmentService from '../services/apartmentService'
import { addToCart } from '../store/actions/cartActions'
import { toast } from "react-toastify"
export default function ApartmentList() {


    const [apartments, setApartments] = useState([])

    let apartmentService = new ApartmentService();
    const loadPost = async () => {
        await apartmentService.getApartment().then(result => setApartments(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])




    return (
        <Container className='formElement main'>
            <Table padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell fluid colSpan='16'>Daireler</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Sahip Ad</Table.HeaderCell>
                        <Table.HeaderCell>Kiracı Ad</Table.HeaderCell>
                        <Table.HeaderCell>Blok Ad</Table.HeaderCell>
                        <Table.HeaderCell>Kat No</Table.HeaderCell>
                        <Table.HeaderCell>Kapı No </Table.HeaderCell>
                        <Table.HeaderCell>Daire Tipi</Table.HeaderCell>
                        <Table.HeaderCell>Doluluk Durumu</Table.HeaderCell>
                        <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        apartments.map(apartment => (
                            <Table.Row key={apartment.apartmentId}>
                                <Table.Cell>{apartment.ownerName}</Table.Cell>
                                <Table.Cell>{apartment.tenantName}</Table.Cell>
                                <Table.Cell>{apartment.blockNo}</Table.Cell>
                                <Table.Cell>{apartment.floorNo}</Table.Cell>
                                <Table.Cell>{apartment.doorNo}</Table.Cell>
                                <Table.Cell>{apartment.apartmentType}</Table.Cell>
                                <Table.Cell>{apartment.isBlank == false ? <Icon name='user' /> : <Icon name='user outline' />}</Table.Cell>
                                <Table.Cell>{apartment.isActive == false ? <Icon name='times' /> : <Icon name='check' />}</Table.Cell>
                                <Table.Cell><Link to={`/apartment/update/${apartment.paymentId}`}><Button>Düzenle</Button></Link></Table.Cell>
                                <Table.Cell><Button>Sil</Button></Table.Cell>




                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>
    )
}
