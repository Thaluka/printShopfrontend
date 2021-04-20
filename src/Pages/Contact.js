import React from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  Spinner,
  Alert,
  Card
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [apiLoading, setApiLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendFail, setSendFail] = useState(false);
  function submiForm(e) {
    e.preventDefault();
    setApiLoading(true);
    const data = {
      first_name: fname,
      last_name: lname,
      email,
      subject,
      description: message,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/message", data)
      .then(function (response) {
       setSendSuccess(true);
       setSendFail(false);
       setApiLoading(false);
      })
      .catch(function (error) {
        setSendSuccess(false);
       setSendFail(true);
       setApiLoading(false);
      })
      .then(function () {
        setApiLoading(false);
      });
  }
  return (
    <div className="container-fluid" style={{background:'#F8F9FB'}}>
      <div className="pb-5 pt-5">
        <Container>
          <div className="container">
            <h1 className="text-center p-5">CONTACT US</h1>
          </div>

          <br />
          <Row border="warning">
            <div className="col-md-8">
              <div className="container">
              <Card  className="card shadow border border border-5 p-2" style={{background:'#F8F9FB'}}>
                <Form onSubmit={(e) => submiForm(e)} className="p-1">
                  <Form.Row className="mt-3">
                    <Form.Group as={Col} controlId="formGridFirstNAme">
                      <Form.Control
                        type="text"
                        required
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter First Name"
                        style={{borderRadius:15}}
                      />
                    </Form.Group>

                    <Form.Group as={Col}  controlId="formGridLast Name">
                      <Form.Control
                        required
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Enter Last Name"
                        style={{borderRadius:15}}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group className="mt-3" controlId="formGridE-mail">
                    <Form.Control
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter E-mail"
                      style={{borderRadius:15}}
                    />
                  </Form.Group>

                  <Form.Group className="mt-3" controlId="formGridE-mail">
                    <Form.Control
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter Subject Of Message"
                      style={{borderRadius:15}}
                    />
                  </Form.Group>

                  <Form.Group className="mt-3" controlId="formGridAddress2">
                    <Form.Control
                      required
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      as="textarea"
                      rows={5}
                      placeholder="Enter Your Message"
                      style={{borderRadius:15}}
                    />
                  </Form.Group>
                  {apiLoading && (
                    <Form.Group className="d-flex justify-content-center">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </Form.Group>
                  )}

                  {sendSuccess && (
                    <Form.Group>
                      <Alert variant={"success"}>Message Sent..</Alert>
                    </Form.Group>
                  )}
                  {sendFail && (
                    <Form.Group>
                      <Alert variant={"danger"}>Sending Failed</Alert>
                    </Form.Group>
                  )}
                    <Form.Row className="d-flex justify-content-end">
                       <Button variant="primary btn-lg align-right" type="submit">
                           Send Message
                       </Button>
                    </Form.Row>
                 
                </Form>
               </Card>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <h3 className="text-Center">Get In Touch</h3>
                <hr/>
                
                  <p className="mt-3"><span><i class="far fa-location-circle"></i></span> <strong className="ml-2">Galle Town,Sri Lanka</strong></p>
                  <br/>
                  <hr/>
                  <p className="mt-3"><span><i class="fas fa-envelope-open-text"></i></span> <strong className="ml-2">www.printhouse.lk</strong></p>
                  <br/>
                  <hr/>
                  <p className="mt-3"><span><i class="fas fa-phone-square-alt"></i></span> <strong className="ml-2">+94477890890</strong></p>
                
                  <p className="mt-3"><span><i class="fas fa-phone-square-alt"></i></span> <strong className="ml-2">+94767890890</strong></p>
                  <br/>
                  <hr/>
                  <p className="mt-3"><span><i class="fab fa-facebook"></i></span> <strong className="ml-2">www.facebook/printhouse</strong></p>
              
              </div>


            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
