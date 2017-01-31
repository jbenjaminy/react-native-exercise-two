import React, { Component } from 'react';
/* TextInput is another 'primative' tag from react-native */
import { Button, CardContainer, CardSection, Input } from './common';

class LoginForm extends Component {
    /* state is what we use to deal with feedback from the user. */
    state = { text: '' };

    render() {
        return (
            <CardContainer>
                <CardSection>
                    {/*
                        TextInput tags behave like the Image tags -- they don't
                        have a height/width set to them and require this to
                        render. Otherwise they render with height/width of 0;

                        TextInput => User types text => 'onChangeText' callback
                        => 'setState' with new text => component rerenders =>
                        when TextInput rerenders, we tell it that its value
                        property is 'this.state.text'

                        *fat arrow callback function gets called whenever a
                        user types in text -- gets called with the value the
                        user added.

                        *whenever we call 'setState' the component immediately
                        rerenders.

                        *the textInput has no idea what its value is when the
                        user types something -- the text is stored as a piece of
                        state instead of being a value in the textInput that we
                        are grabbing out of it. The benefit of this is that we
                        always know what this value is -- that's how we can make
                        real-time searches.
                    */}
                    <Input
                        label='Email'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button />
                </CardSection>
            </CardContainer>
        );
    }
}

export default LoginForm;
