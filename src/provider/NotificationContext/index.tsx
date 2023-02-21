import React from "react";

type Notificationtypes = {
  children: React.ReactNode;
};

type DataModalType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const NotificationContext = React.createContext({} as DataModalType);

const NotificationModalProvider = ({ children }: Notificationtypes) => {
  const [visible, setVisible] = React.useState(false);
  const [code, setCode] = React.useState("");
  return (
    <NotificationContext.Provider value={{ visible, setVisible, code, setCode }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationModalProvider };
