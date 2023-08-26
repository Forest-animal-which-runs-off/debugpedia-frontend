import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (debugId: string) => {
  await axios.get(`${import.meta.env.VITE_APP_API_URL}/debugs/${debugId}`);
};

export const useDeleteDebug = (debugId: string) => {
  const toast = useToast();

  return useSWR(`api/get/debugs${debugId}`, () => fetcher(debugId), {
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
