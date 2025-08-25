import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IMyButton {
  text: string,
  onClick: MouseEventHandler
}

export const MyButton = ({text, onClick}: IMyButton) => {
  return(
    <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {text}
    </Button>
  )
}