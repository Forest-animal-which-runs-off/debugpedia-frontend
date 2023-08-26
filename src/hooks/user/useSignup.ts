import axios from 'axios';

export const useSignup = (email: string, password: string, name: string) => {
  const params = {
    email,
    password,
    name,
  };
  return axios
    .post(`${import.meta.env.VITE_APP_API_URL}/signup`, params)
    .then((res) => console.log(res));
};
