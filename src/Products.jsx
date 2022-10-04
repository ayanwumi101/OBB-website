import React from 'react'
import {Box, Text, Heading, Image, Flex} from '@chakra-ui/react'
import './main.css'
import shea from './assets/shea.png'
import palm from './assets/palm.webp'
import flower from './assets/hibiscus.jpg'
import cocoa from './assets/cocoa2.jpg'
import sheanut from './assets/sheanut.jpg'
import nut from './assets/nut2.jpg'
import sesame from './assets/sesame.jpg'
import beans from './assets/new2.webp'
import img from './assets/9.jpg'

const Products = () => {
  return (
    <Box mt='5'>
        <Box textAlign={'center'} mb='5'>
              <Heading className='heading' color='whatsapp.700'>Our Products</Heading>
              <Box className='line'></Box>
        </Box>

        <Flex mt='8' mb='8' flexWrap={'wrap'} justifyContent='space-around' alignItems={'center'}>
              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={sheanut} mb='2' w='300px' h='200px' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />
                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Shea Nuts</Heading>
                  <Text p='3' textAlign={'justify'}>Shea nut is a perennial African crop that grows only in the wild and is rarely farmed in a systematic way. Shea Nut is used in the confectionaries and cosmetics industries.</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={palm} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />

                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Palm Kernel Cake and Oil</Heading>
                  <Text p='3' textAlign={'justify'}>Palm kernel oil is derived from the kernel of the oil palm tree Elaeis guineensis, extracted from the fruit pulp of the oil palm.
                      Palm kernel oil is commonly used in commercial cooking because it is lower in cost than other oils and remains stable at high cooking temperatures</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={sesame} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />
                  
                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Sesame</Heading>
                  <Text p='3' textAlign={'justify'}>Sesame seed is a flowering plant with a wide range of relatives found across Africa. The seed can be used in a variety of ways. It's a good source of Vegetable Oil, which has no cholesterol and is used in Tahir, a popular Arabian confectionery.</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={img} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />

                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Cowpea Beans</Heading>
                  <Text p='3' textAlign={'justify'}>The cowpea (popularly known as Beans) is an annual herbaceous legume belonging to the Vigna genus.  It is a nutritious component in the human diet, as well as a nutritious livestock feed.  It's also used to make bottled beverages and confections</Text>
              </Box>


              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={nut} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />

                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Raw Cashew Nuts</Heading>
                  <Text p='3' textAlign={'justify'}>Nigeria is a major and growing player in the cashew industry, with an annual average production rise of 5%. Cashew nuts can be consumed raw, cooked into Cashew Cheese, or processed into Cashew Butter.</Text>
              </Box>

              <Box maxW='320px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={cocoa} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />

                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Cocoa Beans</Heading>
                  <Text p='3' textAlign={'justify'}>
                      Cocoa is the dried and fermented seed of the Obroma Cacao tree, and it is used to manufacture chocolate and other products. The Cocoa Butter and Liquor extracted from Cocoa are used in confectionary, cosmetic industry and pharmaceutical industry</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '8px' }}>
                  <Image src={flower} mb='2' borderTopRightRadius={'8px'} borderTopLeftRadius={'8px'} />

                  <Heading size='md' textAlign={'center'} color={'whatsapp.700'}>Hisbiscus Seeds</Heading>
                  <Text p='3' textAlign={'justify'}>Hibiscus, also known as Hibiscus sabdariffa or roselle, is a type of flowering plant native to India and Malaysia. Hibiscus grows in tropical and subtropical regions, including China, Thailand, Sudan, Nigeria, and Mexico. The flowers, seeds, leaves, and stems are all used for culinary, cosmetic, and medicinal preparations</Text>
              </Box>
        </Flex>
    </Box>
  )
}

export default Products