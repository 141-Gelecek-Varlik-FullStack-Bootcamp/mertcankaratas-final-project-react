import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table,  TableHeader } from 'semantic-ui-react'
import PaymentService from '../services/paymentService'
import { addToCart } from '../store/actions/cartActions'
import { toast} from "react-toastify"
export default function PaymentList() {

    const dispatch = useDispatch();
    const [payments, setPayments] = useState([])

    useEffect(()=>{
        let paymentService = new PaymentService()
        paymentService.getPayments().then(result=>setPayments(result?.data?.data))
    },[])

    const handleAddToCart=(payment)=>{
        dispatch(addToCart(payment))
        toast.success(`${payment.paymentId} sepete eklendi`)
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>PaymentId</Table.HeaderCell>
                        <Table.HeaderCell>Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        payments.map(payment => (
                            <Table.Row key={payment.paymentId}>
                                <Table.Cell><Link to={`/paymentdetail/${payment.paymentId}`}>{payment.userId}</Link></Table.Cell>
                                <Table.Cell>{payment.aparmentId}</Table.Cell>
                                <Table.Cell>{payment.invoiceId}</Table.Cell>
                                <Table.Cell>{payment.amount}</Table.Cell>
                                <Table.Cell><Button onClick={()=> handleAddToCart(payment)}>Sepete Ekle</Button></Table.Cell>

                             

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
        </div>
    )
}
