import { Box, Image, Text } from '@chakra-ui/react';

// type Props={
// 	id: string
// 	title: string
// 	detail: string//エラー本文が渡るようにしてください
// 	tech: string
// 	author :string
// }

export const DebugCard = () => {
  const debugCard = {
    id: 'abc',
    title: 'titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    details: 'detailaaaaaaaaaa',
    tech: 'tech',
    author: 'author',
  };

  return (
    <Box bg='white' w='200px' borderRadius='md' boxShadow='lg' h='240px' p='24px' color='black'>
      <Box noOfLines={3}>
        <Text fontSize='18px' as='b'>
        {debugCard.title}
        </Text>
      </Box>
      <Text fontSize='14px'>
      <Box noOfLines={4}>
        {debugCard.details}
      </Box>
      </Text>
      <Box bg='gray.300' color='white' borderRadius='15' >
        <Text as='b'>
        <p>{debugCard.tech}</p>
        </Text>
      </Box>
      <>{debugCard.author}</>
      <Image src='public/bug.svg' alt='Debugpedia' />
    </Box>
  );
};
