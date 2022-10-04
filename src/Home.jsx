import React, {useState} from 'react'
import {Box, Heading, Button, Text, Image, Flex, List, ListItem, ListIcon, Avatar, SimpleGrid} from '@chakra-ui/react'
import {CheckCircleIcon, CheckIcon, PhoneIcon, EmailIcon, ChatIcon, CalendarIcon} from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img from './assets/9.jpg'
import cashew from './assets/7.jpg'
import Slide from 'react-reveal/Slide'
import beans from './assets/8.jpg'
import './main.css'
import image1 from './assets/image1.webp'
import image2 from './assets/image2.webp'
import image3 from './assets/image3.webp'
import image4 from './assets/new1.webp'
import image5 from './assets/new2.webp'
import palm from './assets/palm.webp'
import flower from './assets/hibiscus.jpg'
import cocoa from './assets/cocoa2.jpg'
import sheanut from './assets/sheanut.jpg'
import nut from './assets/nut2.jpg'
import sesame from './assets/sesame.jpg'
import bean from './assets/new2.webp'

const Home = () => {
  
  return (
    <Box>
    
    {/* carousel slider starts here */}
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
          <SwiperSlide><Image src={cashew} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={beans} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={img} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={image3} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={palm} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={flower} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={cocoa} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={sesame} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={sheanut} alt="" className='img' />  </SwiperSlide>
          <SwiperSlide><Image src={nut} alt="" className='img' />  </SwiperSlide>
        </Swiper>
      </Box>
    {/* carousel slider ends here */}

          <Box textAlign={'center'} mt='5' mb='5' p='2'>
            <Heading className='heading' color={'whatsapp.700'} mb='3'>Welcome to BBO Farm Ventures</Heading>
            <Box className='line'></Box>
          </Box>

          <Slide right>
          <Box p='7' mt='5' mb='7' textAlign={'justify'}>
          <Text mb='5' fontSize={'14px'} textAlign={'justify'}>
            BBO Farm Ventures Limited is an agribusiness company registered in Nigeria for the purpose of producing and aggregating agricultural products and services. The company is a fast expanding company registered with the Corporate Affairs Commission of Nigeria as a Limited Liability company, it also owns a growing number of medium-sized farms and warehouses in the northern and western states of Nigeria. The company is 100% owned by BBO FARMS VENTURE LIMITED.
          </Text>
        <Text mb='5' fontSize={'14px'}>We constantly strive to deliver superior quality products to customers and positive returns to stakeholders while remaining competitive.

          At BBO Farm we believe our most priced assets are our people. We intend to build a solid business structure by ensuring we hire and maintain professionals and competent employees.

          We are committed to employing and deploying requisite technology towards the most efficient and optimal allocation of resources.</Text>

        <Text mb='5' fontSize={'14px'} textAlign={'justify'}>
          BBO Farm Ventures Limited has stores, processing facilities, mid-sized farms and market access in Lagos, Oyo, Osun, Ondo, Niger and Yobe states respectively. The company has garnered competence in the following Agricultural produce: Cocoa Beans, Sesame, Raw Cashew Nuts, Soya Beans, Hibiscus, Cow Pea/Beans and Palm Kernel Oil/Cake.
          </Text>
          </Box>
          </Slide>
    </Box>
  )
}

export default Home