import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Input, VStack, Stack, Text, HStack, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type Props = {
  techs: string[];
  setDebug: (newTechs: string[]) => void;
  isEdit: boolean;
};

function TechInput(props: Props) {
  const [techs, setTechs] = useState(props.techs);

  useEffect(() => {
    if (!props.isEdit) {
      const updatedTechs = techs.filter((tech) => tech !== '');
      props.setDebug(techs);
      setTechs(updatedTechs);
    }
  }, [props.isEdit]);

  const addTech = () => {
    setTechs((prev) => [...prev, '']);
  };

  const removeTech = (index: number) => {
    const updatedTechs = techs.filter((_, i) => i !== index);
    setTechs(updatedTechs);
  };

  const handleTechChange = (index: number, value: string) => {
    const updatedTechs = [...techs];
    updatedTechs[index] = value;
    setTechs(updatedTechs);
    props.setDebug(techs);
  };

  return (
    <Box bg='white' w='1050px' borderRadius='lg' boxShadow='lg' p={5} color='black'>
      <Stack direction='row' width='100%'>
        <Text fontWeight='bold'>プログラミング言語/ライブラリ/フレームワーク</Text>
        {props.isEdit && (
          <Button fontWeight='bold' size='sm' h='6' bg='#5AEC16' color='white' onClick={addTech}>
            ＋技術を追加
          </Button>
        )}
      </Stack>

      <Flex direction={props.isEdit ? 'column' : 'row'} align='flex-start' justify='flex-start'>
        {techs.map((tech, index) => (
          <HStack key={index} align='center' width='6%'>
            {props.isEdit ? (
              <>
                <VStack align='flex-start' pt='2'>
                  <Input
                    width='900px'
                    placeholder='技術を入力'
                    value={tech}
                    onChange={(e) => handleTechChange(index, e.target.value)}
                    disabled={!props.isEdit}
                  />
                </VStack>
                {props.isEdit && (
                  <Button variant='ghost' size='sm' onClick={() => removeTech(index)}>
                    <CloseIcon />
                  </Button>
                )}
              </>
            ) : (
              <Box fontWeight='bold' bg='gray.400' color='white' borderRadius='15' p='1'>
                <Text fontSize={16} ml='4' mr='4'>
                  {tech}
                </Text>
              </Box>
            )}
          </HStack>
        ))}
      </Flex>
    </Box>
  );
}

export default TechInput;
