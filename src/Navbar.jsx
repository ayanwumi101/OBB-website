import React, {useState} from 'react'
import { ReactNode } from 'react';
// import {Link} from 'react-scroll'
import logo from './assets/obb.png'
import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Heading,
    Image, 
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';




const NavLink = ({ children }, { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(true)
    const hideNav = () => {

    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDirection='row-reverse'>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={13} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                                <Link to='/'>
                                    Home
                                </Link>

                                <Link to='/about'>
                                    Our Company
                                </Link>

                                <Link to='/products'>Products</Link>

                                <Link to='/teams'>
                                    Teams
                                </Link>

                                <Link to='/gallery'>
                                    Gallery
                                </Link>

                                <Link to='/partners'>
                                    Partners
                                </Link>

                                <Link to='/contact'>
                                    Contact us
                                </Link>
                        </HStack>
                    </HStack>
                    <Link to='/'>
                    <Flex alignItems={'center'}>
                        
                            <Image src={logo} w='70px' />
                            <Heading size='md'>BBO Farm Ventures</Heading>
                    </Flex>
                    </Link>
                </Flex>

        
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} onClick={() => setShow(false)}>
                        
                            
                            <Stack as={'nav'} spacing={4}>
                                <Link to='/'>Home</Link>
                                <Link to='/about'>Our Company</Link>
                                <Link to='/products'>Products</Link>

                                <Link to='/teams'>
                                    Teams
                                </Link>

                                <Link to='/gallery'>
                                    Gallery
                                </Link>

                                <Link to='/partners'>
                                    Partners
                                </Link>

                                <Link to='/contact'>
                                    Contact us
                                </Link>
                            </Stack>

                            
                        </Box>
                ) : null}
        
            </Box>
        </>
    );
}