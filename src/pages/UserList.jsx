import '../utilities/customCSS/ApartmentFormElement.css';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Icon, Table } from 'semantic-ui-react'
import UserService from '../services/userService';

export default function UserList() {

    
    const [users, setUsers] = useState([])

    let userService = new UserService();
    const loadPost = async () => {
        await userService.getUsers().then(result => setUsers(result.data.data))
    }
    useEffect(() => {



        loadPost();
    }, [])

  

  
    return (
        <Container className='formElement main'>
            <Table padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Araç</Table.HeaderCell>
                        <Table.HeaderCell>Aktif Durumu </Table.HeaderCell>
                        <Table.HeaderCell>Silinme Durumu</Table.HeaderCell>
                        
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                       
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        users.map(user => (
                            <Table.Row key={user?.userId}>
                                <Table.Cell>{user?.firstName}</Table.Cell>
                                <Table.Cell>{user?.lastName}</Table.Cell>
                                <Table.Cell>{user?.email}</Table.Cell>
                                <Table.Cell>{user?.plaka ==="" ? <Icon name='times'/>:user?.plaka}</Table.Cell>
                                <Table.Cell>{user.isActive === false ? <Icon name='times'/>:<Icon name='check'/>}</Table.Cell>
                                <Table.Cell>{user.isDeleted === false ? <Icon name='times'/>:<Icon name='check'/>}</Table.Cell>
                                
                                
                                <Table.Cell><Link to={`/user/update/${user.userId}`}><Button>Düzenle</Button></Link></Table.Cell>
                                <Table.Cell><Button>Sil</Button></Table.Cell>
                                

                             

                            </Table.Row>
                        ))
                    }


                </Table.Body>

               
            </Table>
        </Container>
    )
}
