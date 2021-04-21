import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import { useAuthUpdate } from "../../context/AuthContext";

const Logout = () => {
  const { logOut } = useAuthUpdate();
  const [hasDispatched, setHasDispatched] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies([
    "gg_user",
    "_gg_production_session",
  ]);

  useEffect(() => {
    removeCookie("gg_user");
    removeCookie("_gg_production_session");
    logOut();

    setHasDispatched(true);
  }, [hasDispatched]);

  if (hasDispatched) {
    return <Redirect to="/welcome" />;
  }

  return null;
};

export default Logout;
