import React from 'react'
import { Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar, Image } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import first from './assets/1.jpeg'
import second from './assets/2.jpeg'
import third from './assets/3.jpeg'
import fourth from './assets/gallery1.jpeg'
import fifth from './assets/5.jpeg'
import sixth from './assets/6.jpeg'
import seventh from './assets/gallery2.jpeg'
import eight from './assets/gallery3.jpeg'
import nineth from './assets/gallery4.jpeg'
import tenth from './assets/gallery5.jpeg'
import house from './assets/house.jpeg'
import house1 from './assets/house1.jpeg'
import house2 from './assets/house2.jpeg'
import house4 from './assets/house4.jpeg'

const Gallery = () => {
  return (
      <Box as='section'>
          <Zoom>
              <Box textAlign={'center'} mb='9' mt='5'>
                  <Box textAlign={'center'} className='heading' color='whatsapp.700'>Gallery</Box>
                  <Box className='line'></Box>
              </Box>
          </Zoom>

          <Box mb='80px'>
              <Flex justifyContent={'space-around'} flexWrap={'wrap'} alignItems='center'>
                  <Box w='300px' mb='9' boxShadow={'xl'}>
                      <Image src={sixth} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={fourth} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={fifth} borderRadius='md' />
                  </Box>
                  <Box w='300px' mb='9' boxShadow={'xl'}>
                      <Image src={tenth} borderRadius='md' />
                  </Box>
                  <Box w='300px' mb='9' boxShadow={'xl'}>
                      <Image src={eight} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={first} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={second} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={seventh} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={nineth} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={house} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={house1} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={house2} borderRadius='md' />
                  </Box>
                  <Box w='250px' mb='9' boxShadow={'xl'}>
                      <Image src={house4} borderRadius='md' />
                  </Box>
              </Flex>
          </Box>
      </Box>
  )
}

export default Gallery