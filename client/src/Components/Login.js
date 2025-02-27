import LoginImages from "../Images/loginImage.jpg";
import { Container, Row, Col, Form, Button } from "reactstrap"; //import the Reactstrap Components
import { Link } from "react-router-dom";
import { userSchema } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });
  const onSubmit = (data) => {
    console.log("Form Data", data);
  };
  return (
    <div>
      <h1>Login</h1>

      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3}>
              <p>Email:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Enter Password"
                type="textarea"
                {...register("email")}
              />
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={3}>
              <p>Password:</p>
              <input
                id="exampleText"
                name="text"
                placeholder="Enter Password"
                type="textarea"
                {...register("password")}
              />
            </Col>
            <p className="error">{errors.password?.message}</p>
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
