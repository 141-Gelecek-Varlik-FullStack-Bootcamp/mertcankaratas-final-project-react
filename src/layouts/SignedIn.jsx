import React from 'react'
import { Dropdown,Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/60038076?v=4"/>
                <Dropdown pointing="top left" text='Mertcan'>
                    <Dropdown.Menu>
                       
                        <Dropdown.Item onClick={signOut} text="Çıkışyap" icon="sign-out"/>

                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
