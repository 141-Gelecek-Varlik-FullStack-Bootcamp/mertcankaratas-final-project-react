import '../utilities/customCSS/ApartmentFormElement.css';
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container,  Table, } from 'semantic-ui-react'
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
        <Container className='formElement main'>
            <Table padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kullanıcı No</Table.HeaderCell>
                        <Table.HeaderCell>Apartman No </Table.HeaderCell>
                        <Table.HeaderCell>Fatura No</Table.HeaderCell>
                        <Table.HeaderCell>Tutar</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        payments.map(payment => (
                            <Table.Row key={payment.paymentId}>
                                <Table.Cell>{payment.userId}</Table.Cell>
                                <Table.Cell>{payment.apartmentId}</Table.Cell>
                                <Table.Cell>{payment.invoiceId}</Table.Cell>
                                <Table.Cell>{payment.amount}</Table.Cell>
                                <Table.Cell><Link to={`/payment/update/${payment.paymentId}`}><Button>Düzenle</Button></Link></Table.Cell>
                                <Table.Cell><Button onClick={()=> handleAddToCart(payment)}>Sil</Button></Table.Cell>
                                <Table.Cell><Button onClick={()=> handleAddToCart(payment)}>Sepete Ekle</Button></Table.Cell>

                             

                            </Table.Row>
                        ))
                    }


                </Table.Body>

                
            </Table>
        </Container>
    )
}
