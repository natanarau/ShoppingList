import { NotificationContext } from "@/provider/NotificationContext";
import React from "react";

export const useNotifications = () => {
  const { visible, setVisible, code, setCode } =
    React.useContext(NotificationContext);

  return { visible, setVisible, code, setCode };
};
