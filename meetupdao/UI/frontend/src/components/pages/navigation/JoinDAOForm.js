import React, { Component } from 'react';
import {
    Button,
    Checkbox,
    Form
} from 'semantic-ui-react';

export default class JoinDAOForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field inline required>
                    <input placeholder="Enter your name" id='memberName' />
                </Form.Field>
                <Form.Field required>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'onClick='becomeMember()'>Join DAO</Button>
            </Form>
        )
    }

}