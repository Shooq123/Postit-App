import { Container, Row, Col, Form, Button } from "reactstrap"; //import the Reactstrap Components

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <Container>
        <Form>
          <Row>
            <Col md={3}>
              <p>Name:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Enter your Name"
                type="textarea"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <p> Email:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Enter your Email"
                type="textarea"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <p>Password:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Enter Password"
                type="textarea"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <p>Confirm Password:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Confirm Password"
                type="textarea"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            <Col md={3}></Col>
          </Row>
          <Button>Register</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
