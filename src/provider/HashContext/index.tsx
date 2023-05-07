import { HashType } from "@/types";
import React from "react";

const HashContext = React.createContext({} as HashType);

const HashProvider = ({ children }: any) => {
  const [hash, setHash] = React.useState<string>("");

  return (
    <HashContext.Provider value={{ hash, setHash }}>
      {children}
    </HashContext.Provider>
  );
};

export { HashContext, HashProvider };
