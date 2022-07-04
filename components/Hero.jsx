import { Flex, Box, Heading, Text, Button } from 'theme-ui';
import Image from 'next/image';
import HeroImage from '../assets/workspace-wallpaper.jpg';
import SocialIcons from './SocialIcons';

export default function Hero() {
  return (
    <Flex sx={styles.hero}>
      <Box sx={styles.heroText}>
        <Box>
          <Heading>Hi, I'm</Heading>
          <Heading sx={styles.highlight}>Daniel Vũ</Heading>
          <Heading>A Passionate Web Developer</Heading>
        </Box>

        <Box>
          <Text>
            I create dedicated designs and turn them into real products with
            React and passion 🔥🔥🔥!
          </Text>
        </Box>

        <SocialIcons color='#000A12' />

        <Box>
          <Button variant='filled'>SEE MY WORK</Button>
          <Button variant='outlined'> RESUME</Button>
        </Box>
      </Box>

      <Box sx={styles.heroImage}>
        <Image
          src={HeroImage}
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
        />
      </Box>
    </Flex>
  );
}

const styles = {
  hero: {
    flexDirection: ['column-reverse', 'row'],
    minHeight: ['max-content', '100vh'],
    boxShadow: '0 2px',
  },
  heroText: {
    justifyContent: 'center',
    width: ['100%', '50%'],
    py: [16, '10%'],
    px: [12, 16],
    div: {
      mb: [2, 3],
      button: {
        mr: 4,
      },
    },
  },
  highlight: {
    color: 'accent',
  },
  heroImage: {
    width: ['100%', '50%'],
    height: ['40vh', 'auto'],
    position: 'relative',
    boxShadow: ['0 2px', '-2px 0'],
    img: {
      zIndex: -1,
    },
  },
};
