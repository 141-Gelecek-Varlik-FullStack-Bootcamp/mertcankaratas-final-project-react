import React from 'react'
import '../utilities/customCSS/ApartmentFormElement.css';
import PaymentList from '../pages/PaymentList'
import { Grid,Container } from 'semantic-ui-react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
   
} from 'react-router-dom';
import PaymentDetail from '../pages/PaymentDetail'
import Login from '../pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PaymentAdd from '../pages/PaymentAdd'
import ApartmentAdd from '../pages/ApartmentAdd'
import DuesAdd from '../pages/DuesAdd'
import InvoiceTypeAdd from '../pages/InvoiceTypeAdd'
import UserAdd from '../pages/UserAdd'
import PaymentForm from '../pages/CreditCard'
import ApartmentUpdate from '../pages/ApartmentUpdate';
import UserUpdate from '../pages/UserUpdate';
import PaymentUpdate from '../pages/PaymentUpdate';
import ApartmentList from '../pages/ApartmentList';
import UserList from '../pages/UserList';
import MailList from '../pages/MailList';
import NotFound from '../pages/NotFound';
export default function Dashboard() {
    
    return (
        <Container>
            <ToastContainer position='top-right'/>
            <Grid className='main'>
                <Grid.Row>
                  
                    <Grid.Column width={16}>
                        
                        <Routes>
                            
                            <Route exact path='/' element={< PaymentList />}></Route>
                            <Route exact path='/paymentupdate/:id' element={< PaymentDetail />}></Route>
                            <Route exact path='/login' element={< Login />}></Route>
                            <Route exact path='/payment/add' element={< PaymentAdd />}></Route>
                            <Route exact path='/payment/update/:id' element={< PaymentUpdate />}></Route>
                            <Route exact path='/apartment/add' element={<ApartmentAdd />}></Route>
                            <Route exact path='/apartment/list' element={<ApartmentList />}></Route>
                            
                            <Route exact path='/apartment/update/:id' element={<ApartmentUpdate />}></Route>

                            <Route exact path='/dues/add' element={<DuesAdd/>}></Route>
                            <Route exact path='/invoicetype/add' element={<InvoiceTypeAdd/>}></Route>
                            <Route exact path='/user/add' element={<UserAdd/>}></Route>
                            <Route exact path='/user/update/:id' element={<UserUpdate/>}></Route>
                            <Route exact path='/user/List' element={<UserList/>}></Route>
                            
                            <Route exact path='/creditcard' element={<PaymentForm/>}></Route>
                            <Route exact path='/maillist' element={<MailList/>}></Route>
                            <Route exact path='*' element={<NotFound/>}></Route>
                            
                        </Routes>


                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </Container>
    )
}
