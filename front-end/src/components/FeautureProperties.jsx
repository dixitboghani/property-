import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import img from '../assets/img/theme/img.jpg';


class FeautureProperties extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <h1 className="display-3">Feature Properties</h1>
                    <Row>
                    <Col sm="4">
                             <Card body>
                             <CardImg top width="100%" src={img} alt="Card image cap" />
                                 <CardTitle>                                     <strong>
                                         sample home
                                     </strong>
                                 </CardTitle>
                             <CardText>This is sample house in some address</CardText>
                             <Button href="/Error" color="info" outline type="button">GO for Property</Button>
                             </Card>
                        </Col>
                        <Col sm="4">
                             <Card body>
                             <CardImg top width="100%" src={img} alt="Card image cap" />
                                 <CardTitle>                                     <strong>
                                         sample home
                                     </strong>
                                 </CardTitle>
                             <CardText>This is sample house in some address</CardText>
                             <Button href="/Error" color="info" outline type="button">GO for Property</Button>
                             </Card>
                        </Col>
                        <Col sm="4">
                             <Card body>
                             <CardImg top width="100%" src={img} alt="Card image cap" />
                                 <CardTitle>                                     <strong>
                                         sample home
                                     </strong>
                                 </CardTitle>
                             <CardText>This is sample house in some address</CardText>
                             <Button href="/Error" color="info" outline type="button">GO for Property</Button>
                             </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default FeautureProperties
