import React, { useState,useEffect } from 'react'
import { Button, Icon, Menu, Table,  TableHeader } from 'semantic-ui-react'
import ProductService from '../services/paymentService'
export default function PaymentList() {
    const [payments, setPayments] = useState([])

    useEffect(()=>{
        let productService = new ProductService()
        productService.getPayments().then(result=>setPayments(result.data.data))
    })
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <TableHeader></TableHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        payments.map(payment => (
                            <Table.Row key={payment.paymentId}>
                                <Table.Cell>{payment.userId}</Table.Cell>
                                <Table.Cell>{payment.aparmentId}</Table.Cell>
                                <Table.Cell>{payment.invoiceId}</Table.Cell>
                                <Table.Cell>{payment.amount}</Table.Cell>
                             

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
