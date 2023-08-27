import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';

type Arg = {
  name: string;
  email: string;
  password: string;
};

const fetcher = async (_: string, { arg }: { arg: Arg }) => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/signup`, arg);
};

export const useSignup = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { trigger, isMutating } = useSWRMutation('api/post/signup', fetcher, {
    onSuccess: () => {
      toast.closeAll();
      toast({
        title: 'ユーザーの登録に成功しました。',
        status: 'success',
      });
      navigate('/debugs');
    },
    onError: (e) => {
      if (e instanceof Error) {
        toast.closeAll();
        toast({
          title: e.message,
          status: 'error',
          position: 'top-right',
          duration: 2000,
        });
      } else {
        toast.closeAll();
        toast({
          title: 'ユーザーの登録に失敗しました。',
          status: 'error',
          position: 'top-right',
        });
      }
    },
  });

  useEffect(() => {
    if (isMutating) {
      toast({
        title: '登録中...',
        status: 'info',
        duration: null,
        isClosable: false,
        position: 'top-right',
      });
    }
  }, [isMutating]);

  return { trigger, isMutating };
};
