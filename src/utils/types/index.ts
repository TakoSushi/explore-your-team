export type TMemberState = {
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

export type TMemberStateResponse = {
  data: TMemberState;
  support: TSupportFields;
};

export type TTeamList = TMemberState[];

export type TTeamListResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TMemberState[];
  support: TSupportFields;
};

export type TTeamListResponseOmit = {
  page: number;
  total_pages: number;
  teamList: TMemberState[];
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
