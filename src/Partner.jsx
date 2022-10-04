import React from 'react'
import { Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar, Image } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import tiger from './assets/tiger.png'
import partner from './assets/partner.png'

const Partner = () => {
  return (
      <Box as='section' mb='70px'>
          <Zoom>
              <Box textAlign={'center'} mb='7' mt='5'>
                  <Box textAlign={'center'} className='heading' color='whatsapp.700'>Our Partners</Box>
                  <Box className='line'></Box>
              </Box>
          </Zoom>

          <Box mb='5' maxW='1000px' margin={'auto'} p='5' textAlign={'center'}>
              <Slide left>
                  <Box fontSize='17px' maxW='700px' margin='auto' mb='5' textAlign={'center'}>Our partners are one of our major assets ,and we maintain a balanced relationship in bridging the gaps in the industry and ending hunger in Africa</Box>
              </Slide>

              <Flex alignItems={'center'} justifyContent='center' gap='40px' mt='9' flexWrap={'wrap'}>
                  <Slide right>
                      <Box style={{ border: '2px solid lightgrey' }} p='5'>
                          <Image src={tiger} w='200px' mb='5' />
                          <Text>Tiger Foods Limited</Text>
                      </Box>
                  </Slide>

                  <Slide right>
                      <Box style={{ border: '2px solid lightgrey' }} h='150px'>
                          <Image src={partner} w='300px' />
                      </Box>
                  </Slide>

                  <Slide right>
                      <Box style={{ border: '2px solid lightgrey' }} h='150px' p='7'>
                          <Heading size='md'> EARTH BOUNTIES</Heading>
                          <Heading size='md'>FARM</Heading>
                      </Box>
                  </Slide>

              </Flex>
          </Box>
      </Box>
  )
}

export default Partner