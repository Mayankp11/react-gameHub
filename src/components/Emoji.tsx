import coolFace from'../assets/cool-face.png'
import goat from '../assets/Goat.jpg'
import thumpsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
    rating: number;
}

const Emoji = ({rating}: Props) => {

    if (rating < 3) return null;

    const emojiMap : { [key: number] : ImageProps } = {

    
        3: { src: thumpsUp ,alt : 'meh', boxSize:'25px'},
        4: { src: coolFace ,alt : 'recommended', boxSize:'25px'},
        5: { src: goat , alt : 'exceptional', boxSize: '35px'}
    }

  return (
    <Image {...emojiMap[rating]} marginTop={2}/>
  )
}

export default Emoji