import React from "react";
import { useRouter } from "next/router";
import { auth } from "@/service/firebase";

type AuthenticationType = {
  children: React.ReactNode;
};

const AuthenticationContext = React.createContext({} as any);

const AuthenticationProvider = ({ children }: AuthenticationType) => {
  const [loggeding, setLoggeding] = React.useState(false)
  const { push } = useRouter();

  auth.onAuthStateChanged((user) => {
    if(user) {
      setLoggeding(true)
    } else {
      push('/login')
    }
  })
  
  return (
    <AuthenticationContext.Provider value={{ loggeding }}>
      {loggeding && children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
