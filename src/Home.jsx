import React from 'react'
import {Box, Heading, Button, Text, Image, Flex, List, ListItem, ListIcon, Avatar} from '@chakra-ui/react'
import {CheckCircleIcon, CheckIcon} from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import first from './assets/1.jpeg'
import second from './assets/2.jpeg'
import third from './assets/3.jpeg'
import fourth from './assets/4.jpeg'
import fifth from './assets/5.jpeg'
import sixth from './assets/6.jpeg'
import './main.css'
import tiger from './assets/tiger.png'
import partner from './assets/partner.png'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

const Home = () => {
  const date = new Date().getFullYear();
  return (
    <Box>
    
    {/* About Us section starts here */}
      <Box as='section' mt='4' p='3'>
        <Zoom>
        <Box textAlign={'center'} mb='3'>
            <Box textAlign={'center'} className='heading'>About Us</Box>
            <Box className='line'></Box>
        </Box>
        </Zoom>

        <Flex justifyContent={'space-around'} mt='10' flexWrap={'wrap'}>
          <Fade left>
            <Box maxW={'550px'}>
              <Text mb='5' textAlign={'justify'} fontSize='14.5px'>
                  BBO Farm Ventures Ltd is an agribusiness company registered in
                  Nigeria for the purpose of producing and aggregating agricultural
                  products and services. The company owns a growing number of
                  medium sized farms and warehouses in the northern and western
                  states of Nigeria.
                </Text>
                <Text mb='5' textAlign={'justify'} fontSize='14.5px'>
                    Established and fully operational since 2020, the company has
                    garnered competences along the entire value chains of the following
                    products; Cocoa, Cashew, Beans/Cowpea, Soybeans, Maize, Sesame
                    etc.
                </Text>
                <Text mb='5' textAlign={'justify'} fontSize='14.5px'>
                    At BBO, we develop grassroots relationships with farmers and other
                    players who operate at the farm gate level to maintain price
                    advantage and good product quality.
                </Text>
                <Text mb='5' textAlign={'justify'} fontSize='14.5px'>
                    We also engage in primary processing of commodities which ensures
                    quality control and mitigates against the risk inherent in dealing with
                    agricultural produce. And this ultimately secures the investment in
                    the business. Our locations and points of operation are also proximate
                    to the final consumer/market thereby ensuring ease of business with
                    our partners.
                </Text>
                <Text mb='5' textAlign={'justify'} fontSize='14.5px'>
                    During its first year of operations, turnover was in excess of N500
                    million and the company returned a profit.
                </Text>
            </Box>
          </Fade>

          <Fade right>
            <Box>
              <Image src={first} w={'500px'} h='400px' />
            </Box>
          </Fade>
        </Flex>
      </Box>
      {/* The about sections ends here */}


      {/* Te vision and mission section starts here */}
      <Slide right>
      <Box p='9' bg={'gray.200'} color={'grey.200'} w='100%' margin='auto'>
        <Flex flexWrap={'wrap'} justifyContent='space-around' >
          <Box textAlign={'justify'} mb='5' w='300px'>
            <Box textAlign={'center'} fontSize='20px' mb='3'>Our Vission</Box>
            <Text fontSize='14.5px'>
              To become a leading player in the
              Agriculture industry with emphasis on
              the aggregation and processing
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
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  Human Dignity
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  Excellence
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  Initiative
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  Solidarity
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  Confidence
                </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
      </Slide>
      {/* The vision and mission section ends here */}


      <Box as='section' mt='7' mb='9'>
        <Zoom>
          <Box textAlign={'center'} mb='9'>
            <Box textAlign={'center'} className='heading'>C.E.O's Statement</Box>
            <Box className='line'></Box>
          </Box>
        </Zoom>

          <Box mt='9' fontSize={'14.5px'} >
              <Flex justifyContent={'space-evenly'} alignItems='center' flexWrap={'wrap'}>
                  <Fade left>
                  <Box border={'lightgray'} w='350px' p='4' borderRadius={'md'} mb='6' boxShadow={'xl'} dropShadow='lg' bg='white'>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'xl'} mb='3' />
                      <Heading size='md'>ODUNUGA BABATUNDE</Heading>
                      <Heading size='sm'>C.E.O</Heading>
                    </Box>
                    <Text mb='2'>MBA - Business in Emerging Markets Concentration (University of Liverpool, United Kingdom)</Text>
                    <Text>BSc - Economics (University of Lagos)</Text>
                  </Box>
                  </Fade >

                  <Slide right>
                  <Box maxW='500px' textAlign={'justify'} p='5'>
                    <Text mb='5'>
                        What I cherish most about
                        BBO Farm Ventures is the wealth
                        that our projects bring to the community and to our clients.
                    </Text>
                    <Text>
                        From the first day of operation, we feel connected to the
                        community, connected to the environment in which our
                        businesses are being carried out.
                    </Text>
                  </Box>
                  </Slide>
              </Flex>
          </Box>
      </Box>


      <Box as='section' mt='5'>
        <Slide right>
          <Box textAlign={'center'} mb='7'>
            <Box textAlign={'center'} className='heading'>Our Team</Box>
            <Box className='line'></Box>
          </Box>
          </Slide>

        <Fade left>
          <List spacing={3} mt='5' maxW={'1100px'} margin='auto' p='5' textAlign={'justify'}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
                Our team is our most valuable asset. It consists of dedicated and goal
                oriented field and professional operatives.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
              We have a “One Team” attitude and approach to work, we engage
              equally and efficiently to deliver the best products to our clients
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  We care about the relationships we build with our clients and members
                  of the community
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


          <Box pt='5' pb='5' color='blackAlpha.800' bg='gray.200' textAlign={'justify'} mt='9' fontSize={'14.5px'}>

        <Zoom>
          <Box textAlign={'center'} mb='60px'>
            <Box textAlign={'center'} className='heading'>Management Team</Box>
            <Box className='line' bg=''></Box>
          </Box>
        </Zoom>


            <Flex justifyContent={'space-around'} flexWrap='wrap'>
            {/* Card for each team member goes here */}
              <Zoom>
              <Box boxShadow={'lg'} dropShadow='lg' bg='white' w='300px' p='3' mb='5' borderRadius={'md'} >
                <Box textAlign={'center'} mb='5'>
                  <Avatar src='' size={'lg'} mb='3' />
                  <Heading size='sm' mb='3'>ODUNUGA BABATUNDE (MBA)</Heading>
                  <Text>C.E.O.</Text>
                </Box>
              </Box>
              </Zoom>
              
              {/* Card for each team member goes here */}
              <Zoom>
               <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='white' w='300px' p='3' mb='5' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm' mb='3'>Chukwudi Akpa (BSc. - Geology)</Heading>
                      <Text>Logistics Manager</Text>
                    </Box>
                </Box>
              </Zoom>

                {/* Card for each team member goes here */}
                <Zoom>
                <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='white' w='300px' mb='5' p='3' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm' mb='3'>Ayobami Deborah Obiwale (BSc. - Banking & Finance)</Heading>
                      <Text>Accountant.</Text>
                    </Box>
                </Box>
                </Zoom>

            {/* Card for each team member goes here */}
              <Zoom>
                <Box border={'lightgray'} boxShadow={'lg'} dropShadow='lg' bg='white' w='300px' mb='5' p='3' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm' mb='3'>Hakeem Oriyomi Sulaimon (BSc. - Geography)</Heading>
                      <Text>Operations Manager</Text>
                    </Box>
                </Box>
              </Zoom>

              </Flex>
          </Box>

      </Box>


      <Box mt='9'>
        <Box textAlign={'center'} mb='7' mt='5'>
          <Box textAlign={'center'} className='heading'>Our Men At Work</Box>
          <Box className='line'></Box>
        </Box>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Image src={first} alt=""  className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={second} alt=""  className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={third} alt=""  className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={fourth} alt=""  className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={fifth} alt=""  className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={sixth} alt=""  className='img' />  </SwiperSlide>
        </Swiper>
      </Box>

      
      <Box as='section' mb='70px'>
        <Zoom>
        <Box textAlign={'center'} mb='7' mt='5'>
          <Box textAlign={'center'} className='heading'>Our Partners</Box>
          <Box className='line'></Box>
        </Box>
        </Zoom>

        <Box mb='5' maxW='1000px' margin={'auto'} p='5' textAlign={'center'}>
          <Slide left>
          <Box fontSize='17px' maxW='700px' margin='auto' mb='5' textAlign={'center'}>Our partners are one of our gretatest assets in farm sponsor, as we work together in fostering food security and ending hunger in Africa.</Box>
          </Slide>

          <Flex alignItems={'center'} justifyContent='center' gap='40px' mt='9'>
              <Slide right>
              <Box style={{border: '2px solid lightgrey'}} p='5'>
                <Image src={tiger} w='200px' mb='5' />
                <Text>Tiger Foods Limited</Text>
              </Box>
              </Slide>

            <Slide right>
            <Box style={{ border: '2px solid lightgrey' }}  h='150px'>
              <Image src={partner} w='300px' />
            </Box>
            </Slide>

          </Flex>
        </Box>
      </Box>


      <Box as='section' bg='blackAlpha.900' color='whiteAlpha.900'>
        
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
          </Flex>
          </Slide>
          <Box textAlign={'center'} mb='5' mt='9'><Button color='black'><a href="mailto:bbofarmventures@gmail.com?subject=subject text">Email Us</a></Button></Box>
          <hr />
          <Text mt='4' textAlign={'center'}>&copy; {date} BBO Farms Limited - All rights reserved</Text>
        </Box>
      </Box>


    </Box>
  )
}

export default Home