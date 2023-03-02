import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/service/firebase";
import { useNotifications } from "@/hooks/useNotifications";
import { AuthenticationContext } from "@/provider/AuthenticationContext";
import { useRouter } from "next/router";

type AuthTypes = {
  email: string;
  password: string;
};

const useAuth = () => {
  const { setCode, setVisible } = useNotifications();
  const { push } = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { loggeding } = React.useContext(AuthenticationContext);

  const Login = ({ email, password }: AuthTypes) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user
          .getIdToken(true)
          .then((idToken) => {
            if (userCredential.user.emailVerified) {
              setLoading(false);
              push("/");
            } else {
              setVisible(true);
              setCode(401);
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((error) => {
        setCode(error.code);
        setVisible(true);
        setLoading(false);
      });
  };

  const Logout = () => {
    auth.signOut();
  };

  return { Login, loading, loggeding, Logout };
};

export { useAuth };
