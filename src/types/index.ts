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

export type AutocompleteType = {
  label: string
  className: string;
}
