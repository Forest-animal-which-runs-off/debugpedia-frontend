import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import useSWRMutation from 'swr/mutation';
import { DebugRequest } from '../../types';

type Arg = {
  debugId: string;
  debug: DebugRequest;
};

const fetcher = async (_: string, { arg }: { arg: Arg }) => {
  await axios.put(`${import.meta.env.VITE_APP_API_URL}/debugs/${arg.debugId}`, arg.debug);
};

export const useUpdateDebug = () => {
  const toast = useToast();

  const { trigger, isMutating } = useSWRMutation('api/put/debugs', fetcher, {
    onSuccess: () => {
      toast({
        title: 'デバッグの更新に成功しました。',
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

  useEffect(() => {
    if (isMutating) {
      toast({
        title: '更新中...',
        status: 'info',
        duration: null,
        isClosable: false,
        position: 'top-right',
      });
    }
  }, [isMutating]);

  return { trigger, isMutating };
};
