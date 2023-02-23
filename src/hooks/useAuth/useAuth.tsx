import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/service/firebase";
import Cookies from "js-cookie";
import { useNotifications } from "@/hooks/useNotifications";
import { AuthenticationContext } from "@/provider/AuthenticationContext";
import { useRouter } from "next/router";

type AuthTypes = {
  email: string;
  password: string;
};

const useAuth = () => {
  const { setCode, setVisible } = useNotifications()
  const { push } = useRouter()
  const { setToken } = React.useContext(AuthenticationContext)

  const Login = ({ email, password }: AuthTypes) => {
   
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user
          .getIdToken(true)
          .then((idToken) => {
            if(userCredential.user.emailVerified) {
              setToken(Cookies.set("authToken", idToken))
              push('/')
            } else {
              setVisible(true)
              setCode(401)
            }

          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return { Login };
};

export { useAuth };
