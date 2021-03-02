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
`;

const Submit = styled.button`
  width: 250px;
  height: 50px;
  background-color: #b4b4b4;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const Login = () => {
  const logIn = useAuthUpdate();
  const user = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user && user.user) {
      console.log("redirect");
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
