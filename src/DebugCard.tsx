import { Box,Image } from '@chakra-ui/react'


// type Props={
// 	id: string
// 	title: string
// 	detail: string//エラー本文が渡るようにしてください
// 	tech: string
// 	author :string
// }

export const DebugCard = ()=>{
    const debugCard = {
        id:"abc",
        title:"titlelllllllllllll",
        details:"detaillllllllllll",
        tech:"tech",
        author:"author"
    }

    return (
        <Box bg="white" w="200px" borderRadius='md' boxShadow="lg" h="240px" p="24px" color="black">
        <Box noOfLines={3}><h1>{debugCard.title}</h1></Box>
        <Box noOfLines={4}><h2>{debugCard.details}</h2></Box>
        <Box bg="gray.300" color="white"  borderRadius='15'> <p>{debugCard.tech}</p></Box>
        <>{debugCard.author}</>
        <Image src="public/bug.svg" alt="Debugpedia" />
        </Box>
    );
}
