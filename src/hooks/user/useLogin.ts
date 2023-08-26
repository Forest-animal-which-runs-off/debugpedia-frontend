import axios from 'axios';

export const useLogin = (email: string, password: string) => {
  const params = {
    email,
    password,
  };
  return axios
    .post('${process.env.REACT_APP_API_URL}/login', params)
    .then((res) => console.log(res));
};
