import React, { Component } from 'react'
import { Container, Row, Col, Label, FormGroup, Input, Button, FormText, Form } from 'reactstrap'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Container>
                <h1>Registration Page</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="Profile_Email" id="Profile_Email" placeholder="Your Email ID" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Profile_Pass">Password</Label>
                        <Input type="password" name="Profile_Pass" id="Profile_Pass" placeholder="Type a Strong Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Profile_Type">Select For Which Profile</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>Buyer</option>
                        <option>Seller</option>
                        <option>Builder</option>
                        
                        </Input>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="pr_Address">Address : </Label>
                        <Input type="textarea" name="text" id="pr_Address" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Profile_Image">Profile Picture : </Label>
                        <Input type="file" name="file" id="Profile_Image" />
                        <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Male
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Female
                        </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                            Option three is disabled
                        </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
                        </Label>
                    </FormGroup>
                    <Button color ="success">Sign Up</Button>
                </Form>
                </Container>  
            </div>
        )
    }
}

export default Register
