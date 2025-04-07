import loginImage from "../Images/loginImage.jpg";
import { userSchema } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, updateUser } from "../Features/UserSlice";

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const userList = useSelector((state) => state.users.value);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const dispatch = useDispatch();
  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data);
    try {
      const UsersData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      dispatch(addUser(UsersData));
    } catch (error) {
      console.log("Error.");
    }
  };

  return (
    <Container>
      <h1>Update</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                onChange: (e) => setconfirmpassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Update</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UpdateUser;
