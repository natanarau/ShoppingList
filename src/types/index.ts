import { ChangeEvent, SyntheticEvent } from "react";

export type DataProps = {
  id: string;
  listName: string;
  marketplace: string;
  userId: any;
  createdAt: string;
  formattedDate?: string;
};

export type ListProps = {
  data: DataProps[];
};

export type AuthTypes = {
  email: string;
  password: string;
};

export type AuthUserType = {
  displayName: string | null;
  email: string | null;
  id: any;
};

export interface AutocompleteType {
  label: string;
  className: string;
  onChange?: any;
  value?: any;
  items: [
    {
      id: string;
      label: string
    }
  ]
};
export interface MenuVisibleType {
  visible: boolean;
}

export type HashType = {
  hash: string;
  setHash: React.Dispatch<React.SetStateAction<string>>;
};

export type SwitchType = {
  className: "light" | "dark";
  title: string;
  onChange?:
    | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
  checked?: boolean;
};

export type AlertProps = {
  title: string;
  description: string;
  icon: "error" | "success" | "warning";
  open: boolean;
  children: React.ReactNode;
  cancel: () => void;
};
