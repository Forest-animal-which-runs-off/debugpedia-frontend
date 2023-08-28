// DebugCardList.tsx
import { Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { DebugCard } from '../../components/DebugCard';
//import { useGetDebugs } from '../../hooks/debug/useGetDebugs';
import { Header } from '../../components/header';
import { Debug } from '../../types';

export const DebugCardList: React.FC = () => {
  //const { data: debugs, isLoading, error } = useGetDebugs();

  //if (isLoading) {
  //  return <div>Loading...</div>;
  //}

  //if (error) {
  //  return <div>Error: {error.message}</div>;
  //}

  const dummyDebug = [
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
    {
      id: '佐野',
      title: 'error happend',
      body: 'an error happned',
      links: ['https://i.pinimg.com/originals/d6/20/0e/d6200e4f0422dfea9600e795834c6bd3.jpg'],
      techs: ['R'],
      cause: 'typo',
      resolve: 'GTP',
      created_at: new Date(2002, 12, 12),
      updated_at: new Date(2002, 2, 5),
    },
  ];

  return (
    <>
      <Header />
      <SimpleGrid
        columns={{ base: 6, sm: 3, md: 4, lg: 6 }}
        spacing={4}
        w={{ base: '700px', sm: '600px', md: '770px', lg: '1500px' }}
        my={5}
        mx='auto'
      >
        {dummyDebug?.map((debug: Debug) => (
          <DebugCard
            key={debug.id}
            id={debug.id}
            title={debug.title}
            detail={debug.body}
            tech={debug.techs[0]}
            author={debug.id}
          />
        ))}
        <Center
          borderRadius={'50%'}
          as='a'
          href='/debugs/new'
          w={24}
          h={24}
          pos={'fixed'}
          right={16}
          bottom={16}
          bg={'#5AEC16'}
          sx={{
            boxShadow:
              '0px 0px 0px 0px rgba(0, 0, 0, 0.23), 2px 2px 5px 0px rgba(0, 0, 0, 0.22), 7px 7px 10px 0px rgba(0, 0, 0, 0.19), 16px 15px 13px 0px rgba(0, 0, 0, 0.11), 28px 27px 15px 0px rgba(0, 0, 0, 0.03), 43px 42px 17px 0px rgba(0, 0, 0, 0.00)',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <path
              d='M14.6341 0V15H0V25H14.6341V40H24.3902V25H39.0244V15H24.3902V0H14.6341Z'
              fill='white'
            />
          </svg>
        </Center>
      </SimpleGrid>
    </>
  );
};
