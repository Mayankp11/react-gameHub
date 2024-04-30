import { Badge } from "@chakra-ui/react";

interface Props{
    score : number;
}

const CriticScore = ({score}: Props) => {
  
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  
    return (

    // colorScheme applies color to the whole badge, background , number
    // color = only to bG    
   <Badge colorScheme={color} fontSize={'12px'} paddingX={2} borderRadius={'5px'} >
    {score}
   </Badge>
  )
}

export default CriticScore