import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWR from 'swr';

type Arg = {
  debugId: string;
};

const fetcher = async ({ arg }: { arg: Arg }) => {
  await axios.get(`${import.meta.env.VITE_APP_API_URL}/debugs/${arg.debugId}`);
};

export const useDeleteDebug = (debugId: string) => {
  const toast = useToast();

  const { data, error, isLoading } = useSWR(
    `api/get/debugs${debugId}`,
    () => fetcher({ arg: { debugId } }),
    {
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
    },
  );

  return { data, error, isLoading };
};
