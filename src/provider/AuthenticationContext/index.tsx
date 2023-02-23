import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type AuthenticationType = {
  children: React.ReactNode;
};

const AuthenticationContext = React.createContext({} as any);

const AuthenticationProvider = ({ children }: AuthenticationType) => {
  const [token, setToken] = React.useState(Cookies.get("authToken"));
  const { push } = useRouter();

  React.useEffect(() => {
    if (token) {
      push("/");
    } else {
      Cookies.remove("authToken");
      push("/login");
    }
  }, [token]);

  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {token && children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
