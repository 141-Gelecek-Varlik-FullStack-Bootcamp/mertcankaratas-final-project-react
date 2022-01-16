import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu,Dropdown } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    window.isAuthenticated=isAuthenticated;
    const navigate = useNavigate()
    function handleSignOut() {
        setIsAuthenticated(false);
        navigate('/login')
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }
    return (
        <div>
            <Menu inverted size='large' fixed='top'>
                <Container>
                    <Menu.Item
                        name='Anasayfa'

                    />
                    <Menu.Item
                        name='Mesajlar'

                    />
                    <Menu.Item>
                        <Dropdown item text='Admin'>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='edit' text='Kullanıcı İşlemleri' />
                                <Dropdown.Item icon='money' text='Fatura İşlemleri' />
                                <Dropdown.Item icon='settings' text='Apartman İşlemleri' />
                            </Dropdown.Menu>
                        </Dropdown>

                    </Menu.Item>

                    <Menu.Menu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {
                            isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
                        }



                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
