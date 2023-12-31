import { Box, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  detail: string; //エラー本文が渡るようにしてください
  tech: string;
  author: string;
};

export const DebugCard: FC<Props> = (props) => {
  const debugCardLink = `/Debug/${props.id}`;

  return (
    <Link to={debugCardLink}>
      <Box
        bg='white'
        w='200px'
        borderRadius='lg'
        h='240'
        boxShadow='lg'
        p={5}
        color='black'
        transition='transform 0.3s ease-in-out' // スケール変化にトランジションを追加
        _hover={{
          transform: 'scale(1.1)', // ホバー時のスケール変化
        }}
      >
        <Box noOfLines={3} mb='8px' fontWeight='bold'>
          <Text h={83} fontSize='18px'>
            {props.title}
          </Text>
        </Box>

        <Text fontSize='15px' h={76}>
          <Box mb='8px' noOfLines={3}>
            {props.detail}
          </Box>
        </Text>

        <Grid
          templateAreas={`"nav main"
                        "nav footer"`}
        >
          <GridItem area={'main'} pl='2'>
            <Box bg='gray.300' color='white' borderRadius='15' p='1'>
              <Text h='150' as='b' fontSize={13}>
                <p>{props.tech}</p>
              </Text>
            </Box>
          </GridItem>

          <GridItem area={'footer'} pl='2'>
            <Text mr='-14' fontSize='14px'>
              <>{props.author}</>
            </Text>
          </GridItem>

          <GridItem pl='0' area={'nav'}>
            <Image ml='1' mt='2' src='public/bug.svg' alt='Debugpedia' />
          </GridItem>
        </Grid>
      </Box>
    </Link>
  );
};
