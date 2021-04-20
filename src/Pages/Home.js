import React from "react";
import { Button ,Image,Card,CardGroup } from "react-bootstrap";
import awardFirst from '../Images/Awards/award4.png';
import awardSecond from '../Images/Awards/award1.JPG';
import awardThired from '../Images/Awards/award3.png';
import homeImage from '../Images/about2.jpg'


function Home() {
  return     <div className="container-fluid" style={{background:'#F8F9FB'}}>
                <div className="p-5 pb-5">
                  <div className="d-flex justify-content-center p-5">
                      <h1 className="pt-5 text-capitalize text-center fs-1 fw-bolder">Leading offset printing company in Sri Lanka.Your project in good hand</h1>
                  </div>
                  <div className="d-flex justify-content-center pl-5 pr-5 pt-0">
                     <p className="text-center">At Print House we make it our business to produce printed pieces that keep you looking good. We go the extra mile time after time to ensure your project is done right. We deliver results that meet your needs and exceed your expectations.</p>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button href="/contact" className="btn btn-primary btn-lg">Connect With Us</Button>
                  </div>
                  <div>
                      <Image src={homeImage} fluid width="100%" height="auto"/>
                  </div>
                  <hr/>
                  <div className="d-flex justify-content-center">
                       <h3 className="text-Center p-3">Awards</h3>
                  </div>
                 
                  <br/>
                  <div className="d-flex justify-content-around mt-3 pb-5">
                    
                      <CardGroup>
                             <Card className="ml-3 mr-3 border border-1" style={{background:'#F8F9FB'}}>
                                 <Card.Img variant="top" src={awardFirst} height="300" width="30" />
                                      <Card.Body>
                                          <Card.Title className="text-center">REGIONAL PRINT AWARD 2016 </Card.Title>
                                               
                                     </Card.Body>
    
                             </Card>
                             <Card className="ml-3 mr-3 border border-1" style={{background:'#F8F9FB'}}>
                                 <Card.Img variant="top" src={awardSecond} height="300" width="30" />
                                      <Card.Body>
                                           <Card.Title className="text-center">BEST ENTREPRENEUR AWARD 2018</Card.Title>
      
                                      </Card.Body>
                             </Card>
                             <Card className="ml-3 mr-3 border border-1" style={{background:'#F8F9FB'}}>
                                 <Card.Img variant="top" src={awardThired} height="300" width="30" />
                                      <Card.Body>
                                           <Card.Title className="text-center">REGIONAL PRINT AWARD 2020</Card.Title>
      
                                      </Card.Body>
                             </Card>
                             
                             
                      </CardGroup>
                  </div>

                </div>
             </div>;
}

export default Home;
