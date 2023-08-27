import { Button, Center, Flex, Image, Input, Link, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLogin } from '../../hooks/user/useLogin';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { trigger } = useLogin();
  const handleSubmit = () => {
    trigger({ email, password });
  };
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  return (
    <Center bg='#5AEC16' h='100vh' w='100vw'>
      <Center
        bg='white'
        rounded='25px'
        boxShadow='lg'
        p={5}
        w={{ base: '320px', sm: '400px', md: '560px', lg: '720px' }}
      >
        <VStack w={{ base: '90%', md: '60%', lg: '50%' }}>
          <Image src='/debugpedia_logo.svg' alt='デバッグのロゴ' w='250px' mb='20px' />
          <Input
            type='email'
            variant='flushed'
            placeholder='メールアドレスを入力して下さい'
            mb='4px'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            type='password'
            variant='flushed'
            placeholder='パスワードを入力して下さい'
            mb='12px'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap='8px'
            w='full'
            justify='space-between'
            align='center'
            mb={{ base: '24px', md: '48px' }}
          >
            <Link href='/signup' bg='none' color='blue.400' fontWeight='thin' px='32px'>
              新規作成画面へ
            </Link>
            <Button bg='#5AEC16' color='white' px='32px' onClick={handleSubmit}>
              ログイン
            </Button>
          </Flex>
        </VStack>
      </Center>
    </Center>
  );
};
