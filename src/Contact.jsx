import React from 'react'
import { Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar, Button} from '@chakra-ui/react'
import { CheckCircleIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Contact = () => {
  const date = new Date().getFullYear();
  return (
      <Box as='section'>

          <Zoom>
              <Box textAlign={'center'} mb='7' mt='5'>
                  <Box textAlign={'center'} className='heading'>Contact Us</Box>
                  <Box className='line' bg='white'></Box>
              </Box>
          </Zoom>

          <Box p='5' fontSize={'14px'}>
              <Slide left>
                  <Flex justifyContent={'space-around'} flexWrap='wrap'>
                      <Box w='350px' textAlign={'justify'} mb='9'>
                          <Box textAlign={'center'} fontSize='20px' mb='4'>Office Addresses</Box>
                          <Text mb='3'>Lagos State: 4A, Adekola Balogun Street, Lekki Phase1, Lagos.</Text>
                          <Text>Oyo State: 5, Olayiwola close, Olapade Agoro, Oluyole estate Ibadan.</Text>
                      </Box>

                      <Box w='350px' textAlign={'justify'} mb='9'>
                          <Box textAlign={'center'} fontSize='20px' mb='4'>Warehouse Addresses</Box>
                          <Text mb='3'>Positkum: Gidan Ridi, Opposite First Gate Katuswar Hatsi Positkum, Yobe state.</Text>
                          <Text mb='3'>Ikire: Late Ademuyiwa Produce store, Amukuku area, Ikire Osun state</Text>
                          <Text mb='3'>Shaki: Old divine love hospital, Ijale Oda area, Saki.</Text>
                          <Text>Mokwa: 830, Mokwa central mosque grain shade, Mokwa Niger state.</Text>
                      </Box>


                      <Box>
                          <Box fontSize='20px' mb='4'>How to reach us</Box>
                          <List spacing={3}>
                              <ListItem>
                                  <ListIcon as={PhoneIcon} />
                                  +234 802 365 2667
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={EmailIcon} />
                                  bbofarmventures@gmail.com
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={EmailIcon} />
                                  info@bbofarmventures.com
                              </ListItem>
                              <Button color='black' size='sm' mb='5' mt='9'><a href="mailto:bbofarmventures@gmail.com?subject=subject text">Email Us</a></Button>
                          </List>
                      </Box>
                  </Flex>
              </Slide>      
          </Box>
      </Box>

  )
}

export default Contact