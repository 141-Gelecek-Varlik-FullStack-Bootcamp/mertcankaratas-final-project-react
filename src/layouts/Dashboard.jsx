import React from 'react'
import PaymentList from '../pages/PaymentList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Categories from './Categories'
import Navi from './Navi'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
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
export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                            <Route exact path='/' element={< PaymentList />}></Route>
                            <Route exact path='/paymentdetail/:id' element={< PaymentDetail />}></Route>
                            <Route exact path='/login' element={< Login />}></Route>
                            <Route exact path='/payment/add' element={< PaymentAdd />}></Route>
                            <Route exact path='/apartment/add' element={<ApartmentAdd />}></Route>

                            <Route exact path='/dues/add' element={<DuesAdd/>}></Route>
                            <Route exact path='/invoicetype/add' element={<InvoiceTypeAdd/>}></Route>
                            <Route exact path='/user/add' element={<UserAdd/>}></Route>
                            

                        </Routes>


                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
