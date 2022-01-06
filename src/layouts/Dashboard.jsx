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
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                            <Route exact path='/' element={< PaymentList />}></Route>
                            <Route exact path='/paymentdetail/:id' element={< PaymentDetail />}></Route>

                            

                        </Routes>


                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
