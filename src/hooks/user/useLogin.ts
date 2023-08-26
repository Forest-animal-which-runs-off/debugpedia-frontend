import axios from 'axios';

export const useLogin = () => {
  const params = {
    email: 'test@example.com',
    password: 'test1234',
  };
  return axios
    .post('${process.env.REACT_APP_API_URL}/login', params)
    .then((res) => console.log(res));
};
