import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useNavigate } from 'react-router-dom'
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate =useNavigate()
    function handleSignOut() {
        setIsAuthenticated(false);
        navigate('/')
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }
    return (
        <div>
            <Menu inverted size='large' fixed='top'>
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {
                            isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn}/>
                        }



                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
