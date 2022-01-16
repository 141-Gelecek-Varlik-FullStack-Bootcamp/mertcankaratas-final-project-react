import React, { useState,useEffect } from 'react'
import '../utilities/customCSS/ApartmentFormElement.css';

import { Grid, GridColumn, GridRow, Container, Input, Label, Menu, Card, Icon, Sticky, Rail } from 'semantic-ui-react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MailService from '../services/mailService';

export default function MailList() {
    const [mails, setMails] = useState([])

    let mailService = new MailService();
    const loadPost = async () => {
        await mailService.getMails().then(result => setMails(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])

   
    return (
        <Container className='formElement main'>
            <ToastContainer position='top-right' />
            <Grid className='main'>
                <Grid.Row>
                    <Grid.Column width={4}>
                    
                            
                                <Menu vertical pointing attached="bottom"  >
                                    <Menu.Item
                                        name='inbox'
                                    // active={activeItem === 'inbox'}
                                    // onClick={this.handleItemClick}
                                    >
                                        <Label color='teal'>1</Label>
                                        Inbox
                                    </Menu.Item>

                                    <Menu.Item
                                        name='spam'
                                    // active={activeItem === 'spam'}
                                    // onClick={this.handleItemClick}
                                    >
                                        <Label>51</Label>
                                        Spam
                                    </Menu.Item>

                                    <Menu.Item
                                        name='updates'
                                    // active={activeItem === 'updates'}
                                    // onClick={this.handleItemClick}
                                    >
                                        <Label>1</Label>
                                        Updates
                                    </Menu.Item>

                                </Menu>
                            
                        
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Card fluid>
                            <Card.Content header='About Amy' />
                            <Card.Content description="test" />
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </Container >
    )
}
