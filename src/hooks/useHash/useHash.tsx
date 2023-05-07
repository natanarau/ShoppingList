import Modal from "@/Components/Modal";
import { HashContext } from "@/provider/HashContext";
import { useRouter } from "next/router";
import React from "react";

export const useHash = () => {
  const [queryModal, setQueryModal] = React.useState("");
  const { hash, setHash } = React.useContext(HashContext);
  const router = useRouter();

  React.useEffect(() => {
    if (router.query.q) {
      setHash(`${router.query.q}`);
    } else {
      setHash("");
    }
  }, [router.query.q]);

  const mQuery = (e: string) => {
    setHash(e);
    router.push({
      query: {
        q: e,
      },
    });
  };

  const mRemoveQuery = () => {
    router.push({
      query: {},
    });
  };

  return { mQuery, mRemoveQuery, hash, setHash };
};
