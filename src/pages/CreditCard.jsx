import '../utilities/customCSS/ApartmentFormElement.css';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Container, Divider, Label,Button } from 'semantic-ui-react';
import * as Yup from "yup"
import { Form, Formik } from 'formik'
import { toast } from "react-toastify"
import CreditCardService from '../services/creditCardService';
export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };
    

   



    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        let creditCardService = new CreditCardService();
        const initialValues = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            cardNumber: '',
            totalPrice:55
    
        }

        const schema = Yup.object({
            cardNumber: Yup.number().required("Kart Numarası Zorunludur.")
            .min(16).max(16),
            
           
        
        
        })
        const onSubmit = (values, { resetForm }) => {
            console.log(values);
            creditCardService.payment(values).then((result) => {
                toast.success(result?.data?.message)
            }).catch((result) => {
                toast(result?.data?.message)
            })
           
        }

        return (
            <div className=' main'>
                <div id="PaymentForm" >

                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={async ()=> console.log("test")}>
                        <Form className='ui form '>
                        
                            <br />
                            <Label>Kart Numarası</Label>
                            <br/>
                            <input
                                type="tel"
                                name="number"
                                maxLength={16}
                                placeholder="Kart Numarası"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <br />
                            <br />
                            <Label>Kart Sahibi</Label>
                            <br/>
                            <input
                                type="tel"
                                name="name"
                                placeholder="Kart Sahibi"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <br />
                            <br />
                            <Label>Son Kullanma Tarihi</Label>
                            <br/>
                            <input
                                type="tel"
                                name="expiry"
                                maxLength={4}
                                placeholder="Son Kullanma Tarihi"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />

                            <br />
                            <br />
                            <Label >CVC</Label>
                            <input
                                type="tel"
                                name="cvc"
                                maxLength={3}
                                placeholder="Cvc2"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <Divider/>
                            <Button type="button" color='teal' size='large'onClick={onSubmit} ></Button>

                        </Form>



                    </Formik>

                </div>
            </div >
        );
    }
}