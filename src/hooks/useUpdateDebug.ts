import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import { Debug } from '../types';

const fetcher = async (debug: Debug) => {
  await axios.put(`${import.meta.env.VITE_APP_API_URL}/debugs`, debug);
};

export const useCreateDebug = (debug: Debug) => {
  const toast = useToast();

  return useSWRMutation('api/put/debugs', () => fetcher(debug), {
    onSuccess: () => {
      toast({
        title: 'デバッグの更新に成功しました。',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        title: 'デバッグの更新に失敗しました。',
        status: 'error',
      });
    },
  });
};
