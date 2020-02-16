import React, { Component } from 'react';
import {Form, Col, Container, Label, Button, Input, FormGroup} from 'reactstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Login Page</h1>
                <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Profile_Email" className="mr-sm-2">Email</Label>
                    <Input type="email" name="Profile_Email" id="Profile_Email" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="Profile_Pass" className="mr-sm-2">Password</Label>
                    <Input type="password" name="Profile_Pass" id="Profile_Pass" placeholder="don't tell!" />
                </FormGroup>
                <Button color="success">Submit</Button>
                </Form>
                </Container>
            </div>
        )
    }
}

export default LoginPage
