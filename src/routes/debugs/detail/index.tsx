import { EditIcon } from '@chakra-ui/icons';
import { ChakraProvider, /*Spinner ,*/ Box, Button /*, useToast*/ } from '@chakra-ui/react';
import { useState } from 'react';
// import { useLocation } from "react-router-dom";
import App from '../../../App';
import TechInput from '../../../components/TechsInput';
import TextInput from '../../../components/TextInput';
import { Header } from '../../../components/header';
import LinkInput from '../../../components/linkInput';
// import { useGetDebugById } from '../../../hooks/debug/useGetDebugById';
// import { useDeleteDebug } from '../../../hooks/debug/useDeleteDebug';
// import { useUpdateDebug } from '../../../hooks/debug/useUpdateDebug';

export const DetailDebug = () => {
  const data = {
    id: 1,
    title: 'エラー0123',
    body: 'エラー本文',
    links: [
      'https://kansai-hackathon.com/',
      'https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8',
    ],
    techs: ['JavaScript', 'Python'],
    cause: 'エラーの原因',
    resolve: 'エラーの解決策',
    created_at: new Date(2023, 7, 25),
    updated_at: new Date(2023, 7, 28),
  };

  // const DebugId = useLocation().pathname;
  // const data = useGetDebugById(DebugId);

  // const { trigger, isMutating } = useUpdateDebug();
  // const toast = useToast();

  // if (data.error) {
  //     return <>errorです</>
  // }

  // if (data.isLoading) {
  //     return <Spinner />
  // }

  // if (data.data===undefined) {
  //     return <>dataがundefinedです</>
  // }

  type Debug = {
    id?: number;
    title: string;
    body: string;
    links: string[];
    techs: string[];
    cause: string;
    resolve: string;
    created_at?: Date;
    updated_at?: Date;
  };

  const [title, setTitle] = useState<string>(data.title);
  const [body, setBody] = useState<string>(data.body);
  const [links, setLinks] = useState<string[]>(data.links);
  const [techs, setTechs] = useState<string[]>(data.techs);
  const [cause, setCause] = useState<string>(data.cause);
  const [resolve, setResolve] = useState<string>(data.resolve);
  const [values, setValues] = useState<Debug>(data);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleTitleChange = (newTitle: string) => setTitle(newTitle);
  const handleBodyChange = (newBody: string) => setBody(newBody);
  const handleLinksChange = (newLinks: string[]) => setLinks(newLinks);
  const handleTechsChange = (newTechs: string[]) => setTechs(newTechs);
  const handleCauseChange = (newTitle: string) => setCause(newTitle);
  const handleResolveChange = (newResolve: string) => setResolve(newResolve);

  const handleEdit = () => {
    setValues({
      title,
      body,
      links,
      techs,
      cause,
      resolve,
    });
    setIsEdit((prev) => !prev);
  };

  const handleCancel = () => {
    setTitle(values.title);
    setBody(values.body);
    setLinks(values.links);
    setTechs(values.techs);
    setCause(values.cause);
    setResolve(values.resolve);
    setIsEdit(false);
  };

  // const handleSave = async () => {
  //   const updatedDebug = {
  //     title,
  //     body,
  //     links,
  //     techs,
  //     cause,
  //     resolve,
  //   };

  //   try {
  //     await trigger({ arg: { debugId: DebugId, debug: updatedDebug } });
  //     setIsEdit(false);
  //     toast({
  //       title: 'デバッグの更新に成功しました。',
  //       status: 'success',
  //       position: 'top-right',
  //       duration: 2000,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: 'デバッグの更新に失敗しました。',
  //       status: 'error',
  //       position: 'top-right',
  //     });
  //   }
  // };

  return (
    <ChakraProvider>
      <Header />
      <Box>
        {!isEdit && (
          <Button
            onClick={() => handleEdit()}
            /*isLoading={isMutating}*/ bg='#5AEC16'
            display='flex'
            colorScheme='white'
            width='112px'
            height='40px'
            leftIcon={<EditIcon />}
          >
            編集
          </Button>
        )}
        {isEdit && (
          <Button
            onClick={() => handleCancel()}
            /*isLoading={isMutating}*/ bg='#5AEC16'
            display='flex'
            colorScheme='white'
            width='112px'
            height='40px'
            leftIcon={<EditIcon />}
          >
            キャンセル
          </Button>
        )}
      </Box>
      <TextInput label='タイトル' value={title} onChange={handleTitleChange} isEdit={isEdit} />
      <TextInput label='エラー本文' value={body} onChange={handleBodyChange} isEdit={isEdit} />
      <LinkInput links={links} setDebug={handleLinksChange} isEdit={isEdit} />
      <TechInput techs={techs} setDebug={handleTechsChange} isEdit={isEdit} />
      <TextInput label='エラーの原因' value={cause} onChange={handleCauseChange} isEdit={isEdit} />
      <TextInput
        label='どうやって解決したか'
        value={resolve}
        onChange={handleResolveChange}
        isEdit={isEdit}
      />
      {isEdit && (
        <Button
          onClick={() => handleEdit()}
          /*isLoading={isMutating}*/ bg='#5AEC16'
          display='flex'
          colorScheme='white'
          width='112px'
          height='40px'
        >
          変更を保存
        </Button>
      )}
    </ChakraProvider>
  );
};

export default App;
