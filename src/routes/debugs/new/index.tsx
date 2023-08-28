import { Button, Flex ,Link as ChakraLink} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkInput from '../../../components/LinkInput';
import TechInput from '../../../components/TechsInput';
import TextInput from '../../../components/TextInput';
import { Header } from '../../../components/header';

export const DebugNewPage = () => {
  const [isEdit, setEdit] = useState(true);
  const [title, setTitle] = useState('');
  const [errorText, setErrorText] = useState('');
  const [cause, setCause] = useState('');
  const [solution, setSolution] = useState('');
  const [links, setLinks] = useState<string[]>(['']);
  const [techs, setTechs] = useState<string[]>(['']);

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleErrorTextChange = (value: string) => {
    setErrorText(value);
  };

  const handleLinkChange = (newLinks: string[]) => {
    setLinks(newLinks);
  };

  const handleTechChange = (newTechs: string[]) => {
    setTechs(newTechs);
  };

  const handleCauseChange = (value: string) => {
    setCause(value);
  };

  const handleSolutionChange = (value: string) => {
    setSolution(value);
  };

  return (
    <>
      <Header />
      <Flex direction='column' align='center' p={4}>
        <TextInput label='タイトル' value={title} onChange={handleTitleChange} isEdit={isEdit} />
        <TextInput
          label='エラー本文'
          value={errorText}
          onChange={handleErrorTextChange}
          isEdit={isEdit}
        />
        <LinkInput links={links} setDebug={handleLinkChange} isEdit={isEdit} />
        <TechInput techs={techs} setDebug={handleTechChange} isEdit={isEdit} />
        <TextInput
          label='エラーの原因'
          value={cause}
          onChange={handleCauseChange}
          isEdit={isEdit}
        />
        <TextInput
          label='どうやって解決したか'
          value={solution}
          onChange={handleSolutionChange}
          isEdit={isEdit}
        />
      <ChakraLink as={Link} to="/some-path"display={'block'} width='fit-content' > {/*to='../index.tsx'*/}
        <Button  mb="40" backgroundColor='#5AEC16' color='white' onClick={() => setEdit((prev) => !prev)}>
          新規作成
        </Button>
        </ChakraLink>
      </Flex>
    </>
  );
};

export default DebugNewPage;
