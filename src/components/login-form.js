import React, { Component } from 'react';
/* TextInput is another 'primative' tag from react-native */
import { TextInput } from 'react-native';
import { Button, CardContainer, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <CardContainer>
                <CardSection>
                    {/*
                        TextInput tags behave like the Image tags -- they don't
                        have a height/width set to them and require this to
                        render. Otherwise they render with height/width of 0;
                    */}
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>
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
