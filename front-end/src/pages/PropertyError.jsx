import React from 'react';
import { Jumbotron, Button, Container, } from 'reactstrap';


function PropertyError() {
    return (
        <div>
            <Container>
            
                <Jumbotron>
                    <h1 className="display-1">Oops... something is missing</h1>
                    <hr className="my-2" />
                    <h2 className="display-3">But we've more for you!</h2>
                    <p className="lead">
                    <span className="h3">Try looking on the </span> 
                    <Button color="success" href="/">HomePage</Button>
                    </p>
                </Jumbotron>
                
            </Container>
    
        </div>
    )
}

export default PropertyError;
