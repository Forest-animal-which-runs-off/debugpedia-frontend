import { Button, Center, Flex, Image, Input, Link, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export const Signup = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {};

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
            variant='flushed'
            placeholder='ユーザー名を入力して下さい'
            mb='4px'
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
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
            <Link href='/login' bg='none' color='blue.400' fontWeight='thin' px='32px'>
              ログイン画面へ
            </Link>
            <Button bg='#5AEC16' color='white' px='32px' onClick={handleSubmit}>
              新規作成
            </Button>
          </Flex>
        </VStack>
      </Center>
    </Center>
  );
};
