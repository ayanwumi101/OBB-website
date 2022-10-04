import React from 'react'
import {Box, Text, Heading, Flex, List, ListItem, ListIcon, Avatar, Image } from '@chakra-ui/react'
import {CheckCircleIcon} from '@chakra-ui/icons'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import ceo from './assets/ceo.jpeg'

const About = () => {
  return (
      <Box as='section' mt='4'>

          <Flex justifyContent={'space-around'} mt='10' flexWrap={'wrap'} p=''>
              <Fade left>
                  <Box maxW={'550px'}>
                      <Zoom>
                          <Box textAlign={'center'} mb='7'>
                              <Box textAlign={'center'} className='heading' color='whatsapp.700'>Company's Profile</Box>
                              <Box className='line'></Box>
                          </Box>
                      </Zoom>
                      <Text mb='5' textAlign={'justify'} fontSize='14.5px' p='5'>
                          BBO Farm Ventures Ltd is an agribusiness company registered in
                          Nigeria for the purpose of producing and aggregating agricultural
                          products and services. The company owns a growing number of
                          medium sized farms and warehouses in the northern and western
                          states of Nigeria.
                      </Text>
                      <Text mb='5' textAlign={'justify'} fontSize='14.5px' p='5'>
                          Established and fully operational since 2020, the company has
                          garnered competences along the entire value chains of the following
                          products; Cocoa, Cashew, Beans/Cowpea, Soybeans, Maize, Sesame, Palm Kernel,
                          etc.
                      </Text>

                  </Box>
              </Fade>

              <Fade right>
                  <Box maxW={'550px'}>
                      <Zoom>
                          <Box textAlign={'center'} mb='7'>
                              <Box textAlign={'center'} className='heading' color='whatsapp.700'>What We Do</Box>
                              <Box className='line'></Box>
                          </Box>
                      </Zoom>
                      <Text mb='5' textAlign={'justify'} fontSize='14.5px' p='5'>
                          At BBO, we develop grassroots relationships with farmers and other
                          players who operate at the farm gate level to maintain price
                          advantage and good product quality.
                      </Text>
                      <Text mb='5' textAlign={'justify'} fontSize='14.5px' p='5'>
                          We also engage in primary processing of commodities which ensures
                          quality control and mitigates against the risk inherent in dealing with
                          agricultural produce. And this ultimately secures the investment in
                          the business. Our locations and points of operation are also proximate
                          to the final consumer/market thereby ensuring ease of business with
                          our partners.
                      </Text>
                      <Text mb='5' textAlign={'justify'} fontSize='14.5px' p='5'>
                          Since inception as a company in 2020, BBO farm ventures has done business in excess of 1.5 million dollars and the company returned a profit..
                      </Text>
                  </Box>
              </Fade>

          </Flex>

          <Slide right>
              <Box p='9' bg={'whatsapp.100'} color={'grey.200'} w='100%' margin='auto'>
                  <Flex flexWrap={'wrap'} justifyContent='space-around' >
                      <Box textAlign={'justify'} mb='5' w='300px'>
                          <Box textAlign={'center'} fontSize='20px' mb='3'>Our Vision</Box>
                         

                          <Text>
                              Our vision is to be the foremost and most reputable mid-stream commodity trading company which specializes in aggregating commodities.  We aim to always deliver good quantity and quality products at competitive prices which will in turn guarantee maximum value for all stakeholders.
                          </Text>
                      </Box>

                      <Box textAlign={'justify'} mb='5' w='300px'>
                          <Box textAlign={'center'} fontSize='20px' mb='3'>Our Mission</Box>
                          <Text fontSize='14.5px'>
                              To exceed our customer’s expectations
                              by providing quality products and
                              services in an ethical manner
                          </Text>
                      </Box>

                      <Box mb='5' w='150px' >
                          <Box fontSize='20px' mb='3'>Our Values</Box>
                          <List spacing={3}>
                              <ListItem>
                                  <ListIcon as={CheckCircleIcon} color={'green.700'} />
                                  Human Dignity
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={CheckCircleIcon} color={'green.700'} />
                                  Excellence
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={CheckCircleIcon} color={'green.700'} />
                                  Initiative
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={CheckCircleIcon} color={'green.700'} />
                                  Solidarity
                              </ListItem>
                              <ListItem>
                                  <ListIcon as={CheckCircleIcon} color={'green.700'} />
                                  Confidence
                              </ListItem>
                          </List>
                      </Box>
                  </Flex>
              </Box>
          </Slide>



          <Box as='section' mt='7' mb='9'>
              <Zoom>
                  <Box textAlign={'center'} mb='9'>
                      <Box textAlign={'center'} className='heading' color='whatsapp.700'>C.E.O's Statement</Box>
                      <Box className='line'></Box>
                  </Box>
              </Zoom>

              <Box mt='9' fontSize={'14.5px'}>
                  <Flex justifyContent={'space-evenly'} alignItems='center' flexWrap={'wrap'}>

                      <Slide right>
                          <Box maxW='500px' textAlign={'justify'} p='5'>
                              <Text mb='2'>"
                                  <em style={{color: 'green'}}> The best way to predict the future is to create it,  </em>
                                  is a quote that gives expression to the BBO brand story.  
                                  <em>What I cherish most about
                                      BBO Farm Ventures is the wealth
                                      that our projects brings to the communities and to our partners.</em>
                                  <em>From the first day of operation, we feel connected to the
                                      communities, and to the environment in which our
                                      businesses are being carried out. "</em>
                              </Text>
                             
                              <Text fontWeight={'bold'} textAlign='right'> - Babatunde Odunuga</Text>
                          </Box>
                      </Slide>
                  </Flex>
              </Box>
          </Box>
      </Box>
  )
}

export default About