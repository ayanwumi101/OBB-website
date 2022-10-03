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

const Home = () => {
  return (
    <Box>
      <Box>

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


      <Box as='section' mt='4' p='3'>
        <Box textAlign={'center'} mb='3'>
            <Box textAlign={'center'} fontSize='40px'>About Us</Box>
            <Box className='line'></Box>
        </Box>

        <Flex justifyContent={'space-around'} mt='10' flexWrap={'wrap'}>
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

            <Box>
              <Image src={first} w={'500px'} h='400px' />
            </Box>
        </Flex>
      </Box>


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


      <Box as='section' mt='7'>
          <Box textAlign={'center'} mb='3'>
            <Box textAlign={'center'} fontSize='40px'>C.E.O's Statement</Box>
            <Box className='line'></Box>
          </Box>

          <Box mt='9' fontSize={'14.5px'}>
              <Flex justifyContent={'space-around'} alignItems='center' flexWrap={'wrap'}>

                  <Box border={'lightgray'} w='300px' p='4' borderRadius={'md'} mb='6'>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'xl'} mb='3' />
                      <Heading size='md'>ODUNUGA BABATUNDE</Heading>
                      <Heading size='sm'>C.E.O</Heading>
                    </Box>
                    <Text mb='2'>MBA - Business in Emerging Markets Concentration (University of Liverpool, United Kingdom)</Text>
                    <Text>BSc - Economics (University of Lagos)</Text>
                  </Box>

                  <Box maxW='500px' textAlign={'justify'}>
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
              </Flex>
          </Box>
      </Box>


      <Box as='section' mt='5'>
          <Box textAlign={'center'} mb='7'>
            <Box textAlign={'center'} fontSize='40px'>Our Team</Box>
            <Box className='line'></Box>
          </Box>

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


          <Box pt='5' pb='5' color='black' bg='gray.200' textAlign={'justify'} mt='9' fontSize={'14.5px'}>

          <Box textAlign={'center'} mb='7'>
            <Box textAlign={'center'} fontSize='40px'>Management Team</Box>
            <Box className='line' bg=''></Box>
          </Box>


            <Flex justifyContent={'space-around'} flexWrap='wrap'>
              <Box border={'lightgray'} w='300px' p='3' mb='5' borderRadius={'md'}>
                <Box textAlign={'center'} mb='5'>
                  <Avatar src='' size={'lg'} mb='3' />
                  <Heading size='sm'>CEO - ODUNUGA BABATUNDE</Heading>
                </Box>
                <Text>
                    Babatunde is a graduate of the University of
                    Liverpool, United Kingdom with an MBA (Specialization in Business in
                    Emerging Markets). He holds a BSC in Economics from the University of
                    Lagos and has worked with a commodities trading company as a Territory
                    Manager with oversight over more than ten states of the federation.
                    Babatunde overseas the affairs of the company.
                </Text>
                
              </Box>

               <Box border={'lightgray'} w='300px' p='3' mb='5' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm'>Logistics Manager - Ikechukwu Samson Ibenezim</Heading>
                    </Box>
                    <Text>
                        Ikechukwu holds a BSc
                        and MSc (Statistics) from Imo State University and University of Port
                        Harcourt respectively. Prior to BBO, Ikechukwu worked with Imo Concord
                        Hotel as an outlet Supervisor in the Food and Beverage Department, as a
                        Mobil Service Station Manager and Linnef Nigeria Limited as Logistics
                        Manager.
                    </Text>
                </Box>

                <Box border={'lightgray'} w='300px' mb='5' p='3' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm'>Accountant Ayobami Deborah Obiwale</Heading>
                    </Box>
                    <Text>
                        Ayobami has been a vibrant part
                        of the Team since 2020. She holds a Bsc in Banking and Finance from Bowen
                        University and is undertaking her MSc in Banking and Finance at the
                        University of Ibadan. She is also a prospecting Fellow of the ICAN.
                    </Text>
                </Box>


                <Box border={'lightgray'} w='300px' mb='5' p='3' borderRadius={'md'}>
                    <Box textAlign={'center'} mb='5'>
                      <Avatar src='' size={'lg'} mb='3' />
                      <Heading size='sm'>Operations Manager Hakeem Oriyomi Sulaimon;</Heading>
                    </Box>
                    <Text>
                        Bsc Geography and
                        Regional Planning, Msc Geography both in Olabisi Onabanjo University.
                        Hakeem is the Operations Manager. Hakeem worked with Bio Minerals and
                        Petro Chemicals Limited as Admin Supervisor before he joined BBO Farms as
                        Operations Manager
                    </Text>
                </Box>
              </Flex>
          </Box>



      </Box>

      
      <Box as='section' mb='9'>
        <Box textAlign={'center'} mb='7' mt='5'>
          <Box textAlign={'center'} fontSize='40px'>Our Partners</Box>
          <Box className='line'></Box>
        </Box>
        <Box mb='5' maxW='1000px' margin={'auto'}>
          <Box fontSize='20px' mb='5' textAlign={'center'}>Our growing network of strategic partners include</Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
              Shankdeep Limited, Lagos, Nigeria
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
              Tiger Foods Limited, Onitsha, Nigeria
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
              Earth Bounties Limited, Dubai, U.A.E
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'green.500'} />
              Other organizations we are engaging towards developing trade relations with
              include ECOM Trading and Barry Callebaut
            </ListItem>
          </List>
        </Box>
      </Box>


      <Box as='section' bg='blackAlpha.900' color='whiteAlpha.900'>

        <Box textAlign={'center'} mb='7' mt='5'>
          <Box textAlign={'center'} fontSize='40px'>Contact Us</Box>
          <Box className='line' bg='white'></Box>
        </Box>

        <Box p='5' fontSize={'14px'}>
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
          <Box textAlign={'center'} mb='5' mt='9'><Button color='black'><a href="mailto:bbofarmventures@gmail.com?subject=subject text">Email Us</a></Button></Box>
        </Box>
      </Box>


    </Box>
  )
}

export default Home