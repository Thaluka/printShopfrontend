import React from 'react'
import { Card, Container,Row } from 'react-bootstrap';
import laser from '../Images/Technology/laser.jpg';
import offset from '../Images/Technology/offset.jpg';
import thermal from '../Images/Technology/thermal.jpg';
import relief from '../Images/Technology/relief.jpg';
import rotograv from '../Images/Technology/rotogravure.jpeg';
import file from '../Images/Technology/file_types.jpeg';



function Technology() {
    return (
        <div>
             <div className="container-fluid" style={{background:'#F8F9FB'}}>
                   <div className="pb-5 pt-5">
                        <Container>
                             <div className="container">
                                 <h1 className="text-center p-5">OUR TECHNOLOGY</h1>
                             </div>

                                             <br />
                                             <div className="mx-auto">
                                             <Row border="warning">
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card className="p-5  border border-2 shadow" style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={laser} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">LASER PRINTING</Card.Title>
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
                                                             <Card.Img variant="top" src={thermal} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">THERMAL PRINTING</Card.Title>
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
                                                             <Card.Img variant="top" src={offset} height="130px" width="180px" />
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">OFFSET PRINTING</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                             </Row>
                                        </div>
                                             <div className="mx-auto">
                                             <Row border="warning">
                                                 <div className="col-md-3  mr-auto ml-1 mb-1 mt-1">
                                                        <div className="container">
                                                        <Card className="p-5  border border-2 shadow" style={{background:'#F8F9FB', width: '18rem' }}>
                                                             <Card.Img variant="top" src={relief} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">RELIEF</Card.Title>
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
                                                             <Card.Img variant="top" src={rotograv} height="130px" width="180px"/>
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">ROTOGRAVURE</Card.Title>
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
                                                             <Card.Img variant="top" src={file} height="130px" width="180px" />
                                                                 <Card.Body>
                                                                     <Card.Title className="text-primary text-left">SOFTWARE</Card.Title>
                                                                     <Card.Text>
                                                                           Some quick example text to build on the card title and make up the bulk of
                                                                           the card's content.
                                                                     </Card.Text>
                                                                 </Card.Body>
  
                                                        </Card>
                                                        </div>
                                                 </div>
                                             </Row>
                                             </div>
                        </Container>
                    </div>
            </div>
        </div>
    )
}

export default Technology
