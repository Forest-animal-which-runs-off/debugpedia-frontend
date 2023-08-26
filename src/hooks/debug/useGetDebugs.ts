import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  await axios.get(`${import.meta.env.VITE_APP_API_URL}/debugs`);
};

export const useDeleteDebug = () => {
  const toast = useToast();

  return useSWR('api/get/debugs', () => fetcher(), {
    onSuccess: () => {
      toast({
        title: 'デバッグの取得に成功しました。',
        status: 'success',
      });
    },
    onError: (e) => {
      if (e instanceof Error) {
        toast({
          title: e.message,
          status: 'error',
        });
      } else {
        toast({
          title: 'デバッグの更新に失敗しました。',
          status: 'error',
        });
      }
    },
  });
};
