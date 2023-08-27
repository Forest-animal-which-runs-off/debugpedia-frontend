import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, VStack, Stack, HStack, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
    links: string[];
    onChange: () => void;
    isEdit: boolean;
  };
  

function LinkInput(props: Props) {
  const [links, setLinks] = useState(props.links.map(link => ({ link })));

  const addLink = () => {
    setLinks([...links, { link: "" }]);
  };

  const removeLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index].link = value;
    setLinks(updatedLinks);
  };

  return (
    <Box bg="white" w="1050px" borderRadius="lg" boxShadow="lg" p={5} color="black">
      <VStack spacing="8px" align="flex-start">
        <Stack direction="row" width="100%">
          <Text fontWeight="bold">参考にした記事、リンク一覧</Text>
          {props.isEdit && (
            <Button fontWeight="bold" size="sm" h="6" bg="#5AEC16" color="white" onClick={addLink}>
              ＋リンクを追加
            </Button>
          )}
        </Stack>
        {links.map((link, index) => (
          <HStack key={index} align="center">
            {props.isEdit ? (
              <>
                <Input
                  width="900px"
                  placeholder="リンク、記事を入力"
                  value={link.link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                  disabled={!props.isEdit}
                />
                {props.isEdit && (
                  <Button variant="ghost" size="sm" onClick={() => removeLink(index)}>
                    <CloseIcon />
                  </Button>
                )}
              </>
            ) : (
              <Text>{link.link}</Text>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default LinkInput;
