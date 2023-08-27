import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWR from 'swr';
import { Debug } from '../../types';

const fetcher = async () => {
  const res = await axios.get<Debug>(`${import.meta.env.VITE_APP_API_URL}/debugs`);
  return res.data;
};

export const useGetDebugs = () => {
  const toast = useToast();

  const { data, error, isLoading } = useSWR('api/get/debugs', () => fetcher(), {
    onSuccess: () => {
      toast({
        title: 'デバッグの取得に成功しました。',
        status: 'success',
        position: 'top-right',
        duration: 2000,
      });
    },
    onError: (e) => {
      if (e instanceof Error) {
        toast({
          title: e.message,
          status: 'error',
          position: 'top-right',
        });
      } else {
        toast({
          title: 'デバッグの更新に失敗しました。',
          status: 'error',
          position: 'top-right',
        });
      }
    },
  });
  return { data, error, isLoading };
};
