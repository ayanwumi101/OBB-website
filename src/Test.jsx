import React, {useState} from 'react'
import {Button, Box, Text} from'@chakra-ui/react'
import { data } from './data'

const Test = () => {
  const [items, setItems] = useState(data)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>{items.map((item) => <ItemCard item={item} />)}</div>
  )
}

export default Test

const ItemCard = ({item}) => {
  const [showOption, setShowOption] = useState(false)
  return (
    <>
      <Box bg='gray.100' p='5' mt='9'>
        <Box>
          {showOption ? <Box>
            <Text>One</Text>
            <Text>One</Text>
            <Text>One</Text>
          </Box> : ''}
        </Box>
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
        <Button size='sm' onClick={() => setShowOption((prev) => !prev)} colorScheme='teal'>click me</Button>
      </Box>
    </>
  )
}