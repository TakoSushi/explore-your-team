export type TUserState = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type TSupportFields = {
  url: string;
  text: string;
};

export type TUserStateResponse = {
  data: TUserState;
  support: TSupportFields;
};

export type TUsersList = TUserState[];

export type TUsersListResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TUserState[];
  support: TSupportFields;
};

export type TRegisterRequest = {
  email: string;
  password: string;
};

export type TRegisterResponse = {
  id: number;
  token: string;
};
export type TLoginRequest = {
  email: string;
  password: string;
};
export type TLoginResponse = {
  token: string;
};
