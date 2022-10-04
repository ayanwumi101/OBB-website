import React from 'react'
import { Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar, Image } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import first from './assets/1.jpeg'
import second from './assets/2.jpeg'
import third from './assets/3.jpeg'
// import fourth from './assets/4.jpeg'
import fifth from './assets/5.jpeg'
import sixth from './assets/6.jpeg'

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
                  <Box w='200px' mb='9'>
                      <Image src={third} />
                  </Box>
                  <Box w='200px' mb='9'>
                      <Image src={sixth} />
                  </Box>
                  <Box w='200px' mb='9'>
                      {/* <Image src={fourth} /> */}
                  </Box>
                  <Box w='200px' mb='9'>
                      <Image src={fifth} />
                  </Box>
                  <Box w='200px' mb='9'>
                      <Image src={first} />
                  </Box>
                  <Box w='200px' mb='9'>
                      <Image src={second} />
                  </Box>
              </Flex>
          </Box>
      </Box>
  )
}

export default Gallery