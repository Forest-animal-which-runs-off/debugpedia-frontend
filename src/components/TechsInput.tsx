import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Input, VStack, Stack, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  techs: string[];
  onChange: (newTechs: string[]) => void;   isEdit: boolean;
};

function TechInput(props: Props) {
  const [techs, setTechs] = useState([{ text: "" }]);

  const addTech = () => {
    setTechs([...techs, { text: "" }]);
  };

  const removeTech = (index: number) => {
    const updatedTechs = techs.filter((_, i) => i !== index);
    setTechs(updatedTechs);
  };

  const handleTechChange = (index: number, value: string) => {
    const updatedTechs = [...techs];
    updatedTechs[index].text = value;
    setTechs(updatedTechs);
  };

  return (
    <Box bg="white" w="1050px" borderRadius="lg" boxShadow="lg" p={5} color="black">
      <VStack spacing="8px" align="flex-start">
        <Stack direction="row" width="100%">
          <Text fontWeight="bold">プログラミング言語/ライブラリ/フレームワーク</Text>
          {props.isEdit && (
            <Button fontWeight="bold" size="sm" h="6" bg="#5AEC16" color="white" onClick={addTech}>
              ＋技術を追加
            </Button>
          )}
        </Stack>
        {techs.map((tech, index) => (
          <HStack key={index} align="center">
            {props.isEdit ? (
              <>
                <Input
                  width="900px"
                  placeholder="技術を入力"
                  value={tech.text}
                  onChange={(e) => handleTechChange(index, e.target.value)}
                  disabled={!props.isEdit}
                />
                {props.isEdit && (
                  <Button variant="ghost" size="sm" onClick={() => removeTech(index)}>
                    <CloseIcon />
                  </Button>
                )}
              </>
            ) : (
                <Box fontWeight='bold' bg='gray.400' color='white' borderRadius='15' p='1'>
              <Text fontSize={16} ml="4" mr="4">{tech.text}</Text>
              </Box>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default TechInput;
