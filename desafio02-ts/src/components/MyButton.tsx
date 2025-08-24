import { Button } from '@chakra-ui/react'

interface IMyButton {
  text: string,
  action: () => void
}

export const MyButton = ({text, action= () => {}}: IMyButton) => {
  return(
    <Button onClick={action} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {text}
    </Button>
  )
}