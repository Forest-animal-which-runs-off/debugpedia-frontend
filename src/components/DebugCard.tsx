import { Box, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  id: string;
  title: string;
  detail: string; //エラー本文が渡るようにしてください
  tech: string;
  author: string;
};

export const DebugCard: FC<Props> = (props) => {
  const debugCard = {
    id: props.id,
    title: props.title,
    details: props.detail,
    tech: props.tech,
    author: props.author,
  };

  return (
    <Box bg='white' w='200px' borderRadius='lg' h='240' boxShadow='lg' p={5} color='black'>
      <Box noOfLines={3} mb='8px' fontWeight='bold'>
        <Text h={83} fontSize='18px'>
          {debugCard.title}
        </Text>
      </Box>

      <Text fontSize='15px' h={76}>
        <Box mb='8px' noOfLines={3}>
          {debugCard.details}
        </Box>
      </Text>

      <Grid
        templateAreas={`"nav main"
                        "nav footer"`}
      >
        <GridItem area={'main'} pl='2'>
          <Box bg='gray.300' color='white' borderRadius='15' p='1'>
            <Text h='150' as='b' fontSize={13}>
              <p>{debugCard.tech}</p>
            </Text>
          </Box>
        </GridItem>

        <GridItem area={'footer'} pl='2'>
          <Text mr='-14' fontSize='14px'>
            <>{debugCard.author}</>
          </Text>
        </GridItem>

        <GridItem pl='0' area={'nav'}>
          <Image ml='1' mt='2' src='public/bug.svg' alt='Debugpedia' />
        </GridItem>
      </Grid>
    </Box>
  );
};
