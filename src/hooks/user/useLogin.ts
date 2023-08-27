import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';

type Arg = {
  email: string;
  password: string;
};

const fetcher = async (_: string, { arg }: { arg: Arg }) => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, arg);
};

export const useLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { trigger, isMutating } = useSWRMutation('api/post/login', fetcher, {
    onSuccess: () => {
      toast.closeAll();
      toast({
        title: 'ログインに成功しました。',
        status: 'success',
        position: 'top-right',
        duration: 2000,
      });
      navigate('/debugs');
    },
    onError: () => {
      toast.closeAll();
      toast({
        title: 'ログインに失敗しました。',
        status: 'error',
        position: 'top-right',
      });
    },
  });

  useEffect(() => {
    if (isMutating) {
      toast({
        title: 'ログイン中...',
        status: 'info',
        duration: null,
        isClosable: false,
        position: 'top-right',
      });
    }
  }, [isMutating]);

  return { trigger, isMutating };
};

// "ID":14,"Email":"example@gmail.com","Name":"佐藤 仁"
