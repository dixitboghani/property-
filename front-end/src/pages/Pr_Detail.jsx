import React, { Component } from 'react';
import { Container, Col, Row , CardImg, CardText, Card, Button, Link } from 'reactstrap';
import { Table } from 'reactstrap';
import ReadMoreReact from 'read-more-react';
import img from '../assets/img/theme/img.jpg';
import DemoModel from '../components/DemoModel'
import TempHeader from '../components/TempHeader';
import TempFooter from '../components/TempFooter';

class Pr_Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 isLoading:true,
                 current_property_details: []
        }
    }
componentDidMount = async () => {

    const result = await axios.get("http://localhost:5000/details")
    console.log(result)
    if(result.data.success){
        this.setState({
            current_property_details: result.data.data,
            isLoading: false
        })
    }
}

    render() {
        return (
            <div>
                <TempHeader/>
                <Container>
                <Card body inverse color="gray">
                <Table>
                <td>
                    <tr>
                        
                    <CardImg width="50%" height="50%" src={img} alt="Card image cap" />
                    </tr>
                    
                </td>   
                
                <td>
                <tr>
                         <CardText>
                            23 Lacs
                        </CardText>
                </tr>
                    <tr>
                        
                        <CardText>
                            ₹ 996 per sqft
                        </CardText>
                    </tr>
                
                    <tr col="3">
                       
                        <ReadMoreReact text="yourTextHere"/>
                    </tr>
                </td>
                <td>
                    <tr>
                        <span className="h6">
                        PLOTAREA :
                        <br/>
                        
                        <small className="text-muted">2400 sqft</small>
                        </span>
                    </tr>
                    <tr>
                       
                        <Button size="sm" color="danger" href="/Error">Contact Builder</Button>
                    </tr>
                </td>
                <td>
                    <tr>
                        <span className="h6">
                        TRANSACTION:
                        <br/>
                        <small className="text-muted">Contact Owner</small>
                        </span>
                    </tr>
                    <tr>
                        <Button size="sm" color="danger" href="/Error" outline type="button">View Phone No.</Button>
                    </tr>
                    
                </td>
                <td>   
                    <tr row="2"><DemoModel/></tr>
                </td>
                </Table>
                </Card>  
                </Container>
                <TempFooter/>
            </div>
        );
    }
}

export default Pr_Detail;