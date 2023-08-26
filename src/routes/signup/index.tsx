import { Button, Center, Flex, Image, Input, VStack } from '@chakra-ui/react';

export const Signup = () => {
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
          <Input variant='flushed' placeholder='ユーザー名を入力して下さい' mb='4px' />
          <Input variant='flushed' placeholder='メールアドレスを入力して下さい' mb='4px' />
          <Input variant='flushed' placeholder='パスワードを入力して下さい' mb='12px' />
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap='8px'
            w='full'
            justify='space-between'
            mb={{ base: '24px', md: '48px' }}
          >
            <Button bg='none' color='blue.400' fontWeight='thin' px='32px'>
              ログイン画面へ
            </Button>
            <Button bg='#5AEC16' color='white' px='32px'>
              新規作成
            </Button>
          </Flex>
        </VStack>
      </Center>
    </Center>
  );
};
