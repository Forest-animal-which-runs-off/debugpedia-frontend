import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from '../../../components/Header';
import LinkInput from '../../../components/LinkInput'; // インポートを修正
import TextInput from '../../../components/TextInput';
// import {TechInput} from '../../components/TechInput'; // インポートを修正

export const DebugNewPage = () => {
  const [isEdit, setEdit] = useState(true);
  const [text, setText] = useState('');
  const [links, setLinks] = useState<string[]>([""]);
  // const [techs, setTechs] = useState<string[]>([]);

  const handleTextChange = (value: string) => {
    setText(value);
  };

  const handleLinkChange = (newLinks: string[]) => {
    setLinks(newLinks);
  };

  // const handleTechChange = (newTechs: string[]) => {
  //   setTechs(newTechs);
  // };

  return (
    <>
      <Header />
      <Flex direction='column' align='center' p={4}>
        <TextInput label='タイトル' value={text} onChange={handleTextChange} isEdit={isEdit} />
        <TextInput label='エラー本文' value={text} onChange={handleTextChange} isEdit={isEdit} />
        <LinkInput links={links} setDebug={handleLinkChange} isEdit={isEdit} />
        {/* <TechInput techs={techs} onChange={handleTechChange} isEdit={isEdit} /> */}
        <Button onClick={() => setEdit((prev) => !prev)}>Toggle Edit</Button>
      </Flex>
      </>
  );
};

export default DebugNewPage;
