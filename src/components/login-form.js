import React, { Component } from 'react';
import { Button, CardContainer, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <CardContainer>
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </CardContainer>
        );
    }
}

export default LoginForm;
