import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container, Col} from 'reactstrap';



class SearchBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Container>
                <Jumbotron style={{ padding: 0 }} style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }} Fluid>
                
                 <Form>
                <FormGroup row className="justify-content-center">
                    <Col sm={6}>
                        <Input type="Text" name="SearchBox" id="SearchBox" placeholder="Search for Property Type Here" />
                    </Col>
                    <Col sm={2}>
                        <Button color ="primary" href="/search-page">Search</Button>
                    </Col>
                </FormGroup>
                
                </Form>
                
                </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default SearchBox
