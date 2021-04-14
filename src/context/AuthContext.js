import React, { useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [cookies, setCookie] = useCookies(["gg_user"]);

  const logIn = (email, password) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch(`/authenticate`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        if (result.user) {
          setCookie("gg_user", JSON.stringify(result), {
            path: "/",
            maxAge: 86400,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (cookies["gg_user"]) {
      setUser(cookies["gg_user"]);
    }
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthUpdateContext.Provider value={logIn}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}
