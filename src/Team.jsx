import React from 'react'
import { Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import hakeem from './assets/hakeem.jfif'
import ceo from './assets/ceo.jpeg'
import girl from './assets/team.jfif'
import boy from './assets/team3.jfif'
import avatar from './assets/avatar.jpg'

const Team = () => {
  return (
      <Box as='section' mt='5'>
          <Slide right>
              <Box textAlign={'center'} mb='7'>
                  <Box textAlign={'center'} className='heading' color='whatsapp.700'>Our Team</Box>
                  <Box className='line'></Box>
              </Box>
          </Slide>

          <Fade left>
              <List spacing={3} mt='5' maxW={'1100px'} margin='auto' p='5' textAlign={'justify'}>
                  <ListItem>
                      <ListIcon as={CheckCircleIcon} color={'green.500'} />
                      Our team is our most valuable asset, It consists of dedicated, professional and goal
                      oriented members.
                  </ListItem>
                  <ListItem>
                      <ListIcon as={CheckCircleIcon} color={'green.500'} />
                      We have a “One Team” attitude and approach to work, we engage
                      equally and efficiently to deliver the best products to our clients
                  </ListItem>
                  <ListItem>
                      <ListIcon as={CheckCircleIcon} color={'green.500'} />
                      We care about the relationships we build with our clients and members
                      of the communities.
                  </ListItem>
                  <ListItem>
                      <ListIcon as={CheckCircleIcon} color={'green.500'} />
                      Although we have a pragmatic drive for action, our approach is also
                      friendly and down to earth, as we collaborate with both international
                      organizations and the local communities to achieve the goals of our
                      projects
                  </ListItem>
              </List>
          </Fade>


          <Box pt='5' pb='5' color='blackAlpha.800' textAlign={'justify'} mt='9' mb='9' fontSize={'14.5px'}>

              <Zoom>
                  <Box textAlign={'center'} color='whatsapp.700' mb='60px'>
                      <Box textAlign={'center'} className='heading'>Management Team</Box>
                      <Box className='line' bg='black'></Box>
                  </Box>
              </Zoom>


              <Flex justifyContent={'space-around'} flexWrap='wrap' alignItems={'center'}>
                  {/* Card for each team member goes here */}
                  <Zoom left>
                      <Box p='3'>
                          <Box border={'lightgray'} maxW='350px' p='4' bg='gray.200' borderRadius={'md'} mb='6' boxShadow={'xl'} dropShadow='lg' >
                              <Box textAlign={'center'} mb='5'>
                                  <Avatar src={ceo} size={'xl'} mb='3' />
                                  <Heading size='sm' mb='3'>ODUNUGA BOLUTIFE .B</Heading>
                                  <Text mb='2'>C.E.O</Text>
                                  <Text>BSc, MBA - Business in Emerging Market</Text>
                              </Box>
                          </Box>
                      </Box>
                  </Zoom >


                  <Zoom>
                      <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='gray.200' w='300px' mb='5' p='3' borderRadius={'md'}>
                          <Box textAlign={'center'} mb='5'>
                              <Avatar src={hakeem} size={'xl'} mb='3' />
                              <Heading size='sm' mb='3'>HAKEEM ORIYOMI SULAIMON</Heading>
                              <Text mb='2'>Operations Manager (1)</Text>
                              <Text>MSc. BSc. - Geography </Text>
                          </Box>
                      </Box>
                  </Zoom>

                  <Zoom>
                      <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='gray.200' w='300px' mb='5' p='3' borderRadius={'md'}>
                          <Box textAlign={'center'} mb='5'>
                              <Avatar src={boy} size={'xl'} mb='3' />
                              <Heading size='sm' mb='3'>AWERE OLASUBOMI OLAYEMI</Heading>
                              <Text mb='2'>Operations Manager (2)</Text>
                              <Text>MSW. Bsc. - Business Management</Text>
                          </Box>
                      </Box>
                  </Zoom>

                  {/* Card for each team member goes here */}

                  {/* Card for each team member goes here */}
                  <Zoom>
                      <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='gray.200' w='300px' mb='5' p='3' borderRadius={'md'}>
                          <Box textAlign={'center'} mb='5'>
                              <Avatar src={girl} size={'xl'} mb='3' />
                              <Heading size='sm' mb='2'>AYOBAMI DEBORAH OBIWALE</Heading>
                              <Text mb='2'>Accountant.</Text>
                              <Text>BSc - Banking & Finance</Text>
                          </Box>
                      </Box>
                  </Zoom>


                  <Zoom>
                      <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='gray.200' w='300px' p='3' mb='5' borderRadius={'md'}>
                          <Box textAlign={'center'} mb='5'>
                              <Avatar src={avatar} size={'xl'} mb='3' />
                              <Heading size='sm' mb='3'>CUKWUDI AKPA</Heading>
                              <Text mb='2'>Logistics Manager</Text>
                              <Text>BSc - Geology</Text>
                          </Box>
                      </Box>
                  </Zoom>

                  {/* Card for each team member goes here */}

              </Flex>
          </Box>

      </Box>
  )
}

export default Team