import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  VStack,
  Stack,
  HStack,
  Text,
  Input,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  links: string[];
  setDebug: (links: string[]) => void;
  isEdit: boolean;
};

function LinkInput(props: Props) {
  const [links, setLinks] = useState(props.links);

  const addLink = () => {
    setLinks((prev) => [...prev, '']);
  };

  const removeLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
    props.setDebug(links);
  };

  return (
    <Box bg='white' w='1050px' borderRadius='lg' boxShadow='lg' p={5} color='black'>
      <VStack spacing='8px' align='flex-start'>
        <Stack direction='row' width='100%'>
          <Text fontWeight='bold'>参考にした記事、リンク一覧</Text>
          {props.isEdit && (
            <Button fontWeight='bold' size='sm' h='6' bg='#5AEC16' color='white' onClick={addLink}>
              ＋リンクを追加
            </Button>
          )}
        </Stack>
        {links.map((link, index) => (
          <HStack key={index} align='center'>
            {props.isEdit ? (
              <>
                <Input
                  width='900px'
                  placeholder='リンク、記事を入力'
                  value={link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                  disabled={!props.isEdit}
                />
                {props.isEdit && (
                  <Button variant='ghost' size='sm' onClick={() => removeLink(index)}>
                    <CloseIcon />
                  </Button>
                )}
              </>
            ) : (
              <UnorderedList>
                <ListItem mt='2'>
                  <Link isExternal href={link}>
                    {link}
                  </Link>
                </ListItem>
              </UnorderedList>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default LinkInput;
