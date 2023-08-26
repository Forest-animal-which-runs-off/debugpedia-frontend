import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <button>
      <Box backgroundColor='#5aec16' width='full' p={5}>
        <Link to='/login'>
          <Image src='.\Group_4.svg' />
        </Link>
      </Box>
    </button>
  );
};
