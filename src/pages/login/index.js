import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import {
  AuthProvider,
  useAuth,
  useAuthUpdate,
} from "../../context/AuthContext";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 250px;
  height: 50px;
  margin: 5px;
  font-size: 18px;
`;

const Submit = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  width: 223px;
  height: 68px;
  background-color: #be1e2d;
  border: none;
  margin: 5px;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Login = () => {
  const { logIn } = useAuthUpdate();
  const user = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user && user.user) {
      history.push("/");
    } else if (user && user.error) {
      console.log("error");
    }
  }, [user]);

  return (
    <LoginContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logIn(email, password);
        }}
      >
        <Input
          placeholder="EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {user && user.error && user.error.message}
        <Submit type="submit">Enter</Submit>
      </form>
    </LoginContainer>
  );
};

export default Login;
