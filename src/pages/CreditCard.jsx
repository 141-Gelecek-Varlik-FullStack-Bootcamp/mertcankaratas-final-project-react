import '../utilities/customCSS/ApartmentFormElement.css';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Container, Divider } from 'semantic-ui-react';
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
                    <form>
                       
                            <br />
                            <input
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <br />
                            <br />

                            <input
                                type="tel"
                                name="name"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <br />
                            <br />
                            <input
                                type="tel"
                                name="expiry"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />

                            <br />
                            <br />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                       
                    </form>

                </div>
            </div >
        );
    }
}