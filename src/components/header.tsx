import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Box as='header' width='100%' top={0} backgroundColor='#5aec16' p={4} position='sticky'>
      <Box as={Link} display={'block'} width='fit-content' to='/login'>
        <Image src='/Group_4.svg' />
      </Box>
    </Box>
  );
};
