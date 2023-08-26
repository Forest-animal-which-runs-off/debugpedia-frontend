import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import { Debug } from './../../types/index';

const fetcher = async (debug: Debug) => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/debugs`, debug);
};

export const useCreateDebug = (debug: Debug) => {
  const toast = useToast();

  return useSWRMutation('api/get/debugs', () => fetcher(debug), {
    onSuccess: () => {
      toast({
        title: 'デバッグの作成に成功しました。',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: 'デバッグの作成に失敗しました。',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
};
