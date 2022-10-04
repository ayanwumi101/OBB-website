import React from 'react'
import {Box, Text, Heading, Image, Flex} from '@chakra-ui/react'
import './main.css'
import shea from './assets/shea.png'
import palm from './assets/palm.webp'
import flower from './assets/hibiscus.webp'

const Products = () => {
  return (
    <Box mt='5'>
        <Box textAlign={'center'} mb='5'>
              <Heading className='heading'>Our Products</Heading>
              <Box className='line'></Box>
        </Box>

        <Flex mt='8' mb='8' flexWrap={'wrap'} justifyContent='space-around'>
              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                <Image src={shea} mb='1'/>
                <hr />
                <Heading size='md' textAlign={'center'}>Raw Cashew Nuts</Heading>
                  <Text p='1'>Nigeria is a major and growing player in the cashew industry, with an annual average production rise of 5%. Cashew nuts can be consumed raw, cooked into Cashew Cheese, or processed into Cashew Butter.</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                  <Image src={palm} mb='1' w='300px' />
                  <hr />
                  <Heading size='md' textAlign={'center'}>Shea Nuts</Heading>
                  <Text p='1'>Shea nut is a perennial African crop that grows only in the wild and is rarely farmed in a systematic way. Shea Nut is used in the confectionaries and cosmetics industries.</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                  <Image src={flower} mb='1' />
                  <hr />
                  <Heading size='md' textAlign={'center'}>Sesame</Heading>
                  <Text p='1'>Sesame seed is a flowering plant with a wide range of relatives found across Africa. The seed can be used in a variety of ways. It's a good source of Vegetable Oil, which has no cholesterol and is used in Tahir, a popular Arabian confectionery.</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                  <Image src={palm} mb='1' />
                  <hr />
                  <Heading size='md' textAlign={'center'}>Paim Kernel Cake and Oil</Heading>
                  <Text p='1'>Palm kernel oil is derived from the kernel of the oil palm tree Elaeis guineensis, extracted from the fruit pulp of the oil palm.
                      Palm kernel oil is commonly used in commercial cooking because it is lower in cost than other oils and remains stable at high cooking temperatures</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                  <Image src={shea} mb='1' />
                  <hr />
                  <Heading size='md' textAlign={'center'}>Hisbiscus</Heading>
                  <Text p='1'>Hibiscus, also known as Hibiscus sabdariffa or roselle, is a type of flowering plant native to India and Malaysia. Hibiscus grows in tropical and subtropical regions, including China, Thailand, Sudan, Nigeria, and Mexico. The flowers, seeds, leaves, and stems are all used for culinary, cosmetic, and medicinal preparations</Text>
              </Box>

              <Box maxW='300px' fontSize={'14px'} m='3' style={{ border: '1px solid lightgrey', borderRadius: '3px' }}>
                  <Image src={shea} mb='1' />
                  <hr />
                  <Heading size='md' textAlign={'center'}>Cowpea Beans</Heading>
                  <Text p='1'>The cowpea (popularly known as Beans) is an annual herbaceous legume belonging to the Vigna genus.  It is a nutritious component in the human diet, as well as a nutritious livestock feed.  It's also used to make bottled beverages and confections</Text>
              </Box>
        </Flex>
    </Box>
  )
}

export default Products