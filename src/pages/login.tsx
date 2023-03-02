import React from "react";
import Login from "@/page-template/public/Login";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

type Props = {};

export default function index({}: Props) {
  const { push } = useRouter();

  React.useEffect(() => {
    if (Cookies.get("authToken")) {
      push("/");
    }
  }, []);

  return <Login />;
}
