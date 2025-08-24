import { Center } from "@chakra-ui/react";

interface ITitle {
  text: string;
}

export const Title = ({text}: ITitle) => {
  return(
    <Center>
      <h1 className="title">{text}</h1>
    </Center>
  )
}