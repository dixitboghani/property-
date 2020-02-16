import React, { Component } from 'react'
import TempHeader from '../components/TempHeader'
import SearchBox from '../components/SearchBox'
import TempFooter from '../components/TempFooter'
import { Container, Col, Row , CardImg, CardText, Card, Button, Link } from 'reactstrap';
import { Table } from 'reactstrap';
import ReadMoreReact from 'read-more-react';

import DemoModel from '../components/DemoModel'
import axios from 'axios';
class SearchPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 isLoading:true,
                 current_property_data: []
        }
    }
componentDidMount = async () => {

    const result = await axios.get("http://localhost:5000/property/all")
    console.log(result)
    if(result.data.success){
        this.setState({
            current_property_data: result.data.data,
            isLoading: false
        })
    }
}
    render() {
        if(this.state.isLoading) {
            return (
                <div>
                    <TempHeader/>
                    Loading
                    <TempFooter/>
                </div>
            )
        }
        else{
            return (
                <div>
                    
                <TempHeader/>
                     <Container>
               {this.state.current_property_data.map((current,index) => {
                   console.log(current,"here------------------------->")
                    return (
                        <Card body inverse color="gray">
                        <Table>
                        <td>
                            <tr>   
                            <CardImg width="80px" height="80px" src={current.image_url} alt="Card image cap" />
                            </tr>
                        </td>   
                        
                        <td>
                        <tr>
                            <CardText>
                                    {current.pr_name}
                            </CardText>
                            </tr>
                            <tr>
                                <CardText>
                                {current.pr_desc}
                                </CardText>
                            </tr>
                        
                            <tr col="3">
                                
                               
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <span className="h6">
                                PLOTAREA :
                                <br/>
                                <small className="text-muted"></small>{current.pr_size}
                                </span>
                            </tr>
                            <tr>
                                
                                <Button size="sm" color="danger">Contact Builder</Button>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <span className="h6">
                                TRANSACTION:
                                <br/>
                                {current.pr_price}
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
                    )
               })}
                </Container>
                <TempFooter/>
                </div>
            )
        }
    }
}

export default SearchPage
