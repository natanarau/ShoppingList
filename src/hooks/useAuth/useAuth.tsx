import React from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/service/firebase";
import { useNotifications } from "@/hooks/useNotifications";
import { AuthenticationContext } from "@/provider/AuthenticationContext";
import { useRouter } from "next/router";
import { AuthTypes, AuthUserType } from "@/types";

const useAuth = () => {
  const { setCode, setVisible } = useNotifications();
  const { push } = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userOn, setUserOn] = React.useState<AuthUserType>();
  const { loggeding, setLoggeding } = React.useContext(AuthenticationContext);

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
    setLoggeding(false)
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserOn({
          displayName: user?.displayName,
          email: user?.email,
          id: user?.uid,
        });
      } else {
        setUserOn(undefined);
      }
    });
  }, [userOn?.id]);

  return { Login, loading, loggeding, Logout, userOn };
};

export { useAuth };
