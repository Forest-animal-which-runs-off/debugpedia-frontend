import axios from 'axios';
import { useEffect } from 'react';
import { useCreateDebug } from '../../hooks/debug/useCreateDebug';
import { useGetDebugs } from '../../hooks/debug/useGetDebugs';
import { DebugRequest } from '../../types';

type Arg = {
  debug: DebugRequest;
};

export const Debugs = () => {
  const { data, error } = useGetDebugs();
  const { trigger } = useCreateDebug();

  const handleClick = () => {
    const arg: Arg = {
      debug: {
        title: '11111111',
        body: 'fsaga',
        links: ['fsagdsa', 'daga', 'dfagd'],
        techs: ['dgaga', 'sagas', 'fsaga'],
        cause: 'fsga',
        resolve: 'fdsga',
      },
    };
    trigger(arg);
  };
  console.log(data);
  console.log(error);

  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  return <button onClick={handleClick}>click me</button>;
};
