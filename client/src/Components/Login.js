import LoginImages from "../Images/loginImage.jpg";
import { Container, Row, Col, Form, Button } from "reactstrap"; //import the Reactstrap Components
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <Container>
        <Form>
          <Row>
            <Col md={3}>
              Email
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
              Password
              <input
                id="exampleText"
                name="text"
                placeholder="Enter Password"
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
          <Button>Submit</Button>
        </Form>
      </Container>
      <p className="smalltext">
        No Account? <Link to="/register">Sign Up now.</Link>
      </p>
    </div>
  );
};

export default Login;
