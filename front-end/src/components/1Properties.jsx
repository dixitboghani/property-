// import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
// import img from '../assets/img/theme/img.jpg';
// import axios from 'axios';
//import Data from '../../../back-end/models/Properties';


// let some_data = Data.some_Data
// class RecentProperties extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loading:true,
//             property:null,
//             properties_array : [],
                 
//         }
//     } 
//     async componentDidMount(){

//         let response= await axios.get('http://localhost:5000/property/all')
//         console.log(response)
//         this.setState({
//           properties_array: response.data
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Container>
//                 <Row>

//                 {this.state.properties_array.map((current,index) => {
//                         console.log(current)
//                        if(index < 3)
//                        {
//                            return(
//                         <Col sm="4">
//                             <Card body>
//                             <CardImg top width="100%" src={img} alt="Card image cap" />
//                                 <CardTitle>
//                                     <strong>
//                                         {current.pr_name}
//                                     </strong>
//                                 </CardTitle>
//                             <CardText>This is sample house in some address</CardText>
//                             <Button>GO for Property</Button>
//                             </Card>
//                         </Col>)
//                        }
//                     })
//                 }
//                 </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default RecentProperties
