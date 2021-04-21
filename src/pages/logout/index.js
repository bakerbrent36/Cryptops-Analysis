import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const [hasDispatched, setHasDispatched] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies([
    "gg_user",
    "_gg_production_session",
  ]);

  useEffect(() => {
    removeCookie("gg_user");
    removeCookie("_gg_production_session");

    setHasDispatched(true);
  }, [hasDispatched]);

  return (hasDispatched && <Redirect to="/welcome" />) || null;
};

export default Logout;
