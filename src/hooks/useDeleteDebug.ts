import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

const fetcher = async () => {
  await axios.delete(`${import.meta.env.VITE_APP_API_URL}/debugs`);
};

export const useDeleteDebug = () => {
  const toast = useToast();

  return useSWRMutation('api/put/debugs', () => fetcher(), {
    onSuccess: () => {
      toast({
        title: 'デバッグの削除に成功しました。',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        title: 'デバッグの削除に失敗しました。',
        status: 'error',
      });
    },
  });
};
