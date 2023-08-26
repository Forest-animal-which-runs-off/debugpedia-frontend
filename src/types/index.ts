export type Debug = {
  id: number;
  title: string;
  body: string;
  links: string[];
  techs: string[];
  cause: string;
  resolve: string;
  created_at: Date;
  updated_at: Date;
};
export type Credential = {
  name: string;
  email: string;
  password: string;
};
