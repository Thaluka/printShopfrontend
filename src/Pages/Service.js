import React from 'react';
import {Card,CardGroup, Container, Row } from "react-bootstrap";
import serviceOne from '../Images/Services/service1.jpg';
import serviceTwo from '../Images/Services/service2.jpg';
import serviceThree from '../Images/Services/service3.png';
import serviceFour from '../Images/Services/service4.jpg';
import serviceFive from '../Images/Services/service5.png';
import serviceSix from '../Images/Services/service6.jpg';


function Service() {
    return (
        <div className="pt-5">
            <div className="container-fluid" style={{background:'#F8F9FB'}}>
                   <div className="pb-5 pt-5">
                        <Container>
                             <div className="container">
                                 <h1 className="text-center p-5">OUR SERVICES</h1>
                             </div>

                                             <br />
                                             <div className="mx-auto">
                                             <Row border="warning">
                                                 <CardGroup>
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        
                                                        <Card className="p-5  border border-2 shadow" style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceOne} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">DIGITAL PRINTING</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card  className="p-5  border border-2 shadow"  style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceFour} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">TRANSPER PRINTING</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3 mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card className="p-5  border border-2 shadow"  style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceThree} height="130px" width="180px" />
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">CARDS AND BOOK BINDING</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 </CardGroup>
                                             </Row>
                                             </div>
                                             <div className="mx-auto">
                                             <Row border="warning">
                                                 <CardGroup>
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card className="p-5  border border-2 shadow" style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceTwo} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">LAMINATING</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card  className="p-5  border border-2 shadow"  style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceFive} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">PHOTOP COPY </Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3 mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card className="p-5  border border-2 shadow"  style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={serviceSix} height="130px" width="180px" />
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">FLASH STAMPS</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                                 </CardGroup>
                                             </Row>
                                             </div>
                        </Container>
                    </div>
            </div>
           
        </div>
    )
}

export default Service
