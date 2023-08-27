import { Box, Text, Textarea } from '@chakra-ui/react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isEdit: boolean;
};

const TextInput = (props: Props) => {
  const { label, value, onChange, isEdit } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      {isEdit ? (
        <Box bg='white' w='100%' borderRadius='lg' boxShadow='lg' color='block' p={5} m={5}>
          <Text fontWeight='bold' display='flex' ml='3px' p={3} as='label'>
            {label}
          </Text>
          <Textarea value={value} onChange={handleChange} border='1px solid black' />
        </Box>
      ) : (
        <Box bg='white' w='100%' borderRadius='lg' boxShadow='lg' color='block' p={5} m={5}>
          <Text fontWeight='bold' display='flex' ml='3px' p={3}>
            {label}
          </Text>
          <Text display='flex' ml='3px' textAlign='left' minH='80px' p='8px 16px'>
            {value}
          </Text>
        </Box>
      )}
    </>
  );
};

export default TextInput;
