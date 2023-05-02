import React from "react";
import { useRouter } from "next/router";
import { auth } from "@/service/firebase";

type AuthenticationType = {
  children: React.ReactNode;
};

const AuthenticationContext = React.createContext({} as any);

const AuthenticationProvider = ({ children }: AuthenticationType) => {
  const [loading, setLoading] = React.useState(true);
  const [loggeding, setLoggeding] = React.useState(false);
  const { push } = useRouter();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggeding(true);
      } else {
        setLoggeding(false);
        push("/login");
      }
    });
    setLoading(false);
  }, [loggeding]);
  
  return (
    <AuthenticationContext.Provider value={{ loggeding, setLoggeding }}>
      {!loading ? children : "carregando"}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
