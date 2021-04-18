import React from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  Spinner,
  Alert,
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
    <div className="container">
      <div>
        <Container>
          <div className="container">
            <h1 className="text-center p-5">Contact Us</h1>
          </div>

          <br />
          <Row border="warning">
            <div className="col-md-8">
              <div className="container">
                <Form onSubmit={(e) => submiForm(e)}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstNAme">
                      <Form.Control
                        type="text"
                        required
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter First Name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLast Name">
                      <Form.Control
                        required
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Enter Last Name"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridE-mail">
                    <Form.Control
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter E-mail"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridE-mail">
                    <Form.Control
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter Subject Of Message"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Control
                      required
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      as="textarea"
                      rows={5}
                      placeholder="Enter Your Message"
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

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <h1>Contact Us</h1>
              </div>
            </div>
          </Row>
          <Row border="warning">
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
