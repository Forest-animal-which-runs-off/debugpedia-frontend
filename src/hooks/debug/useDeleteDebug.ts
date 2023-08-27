import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import useSWRMutation from 'swr/mutation';

type Arg = {
  debugId: string;
};

const fetcher = async (_: string, { arg }: { arg: Arg }) => {
  await axios.delete(`${import.meta.env.VITE_APP_API_URL}/debugs/${arg.debugId}`);
};

export const useDeleteDebug = () => {
  const toast = useToast();

  const { trigger, isMutating } = useSWRMutation(`api/delete/debugs`, fetcher, {
    onSuccess: () => {
      toast.closeAll();
      toast({
        title: 'デバッグの削除に成功しました。',
        status: 'success',
        position: 'top-right',
        duration: 2000,
      });
    },
    onError: (e) => {
      if (e instanceof Error) {
        toast.closeAll();
        toast({
          title: e.message,
          status: 'error',
          position: 'top-right',
        });
      } else {
        toast.closeAll();
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
        title: '削除中...',
        status: 'info',
        duration: null,
        isClosable: false,
        position: 'top-right',
      });
    }
  }, [isMutating]);

  return { trigger, isMutating };
};
