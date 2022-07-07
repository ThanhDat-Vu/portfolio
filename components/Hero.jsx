import { Flex, Box, Heading, Text, Button } from 'theme-ui';
import Image from 'next/image';
import HeroImage from '../assets/workspace-wallpaper.jpg';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

export default function Hero() {
  return (
    <Flex sx={styles.hero} id='home'>
      <Flex sx={styles.heroText}>
        <Box>
          <Heading as='h1'>Hi, I'm</Heading>
          <Heading as='h1' sx={styles.highlight}>
            Daniel Vũ
          </Heading>
          <Heading as='h1'>A Passionate Web Developer</Heading>
        </Box>

        <Box>
          <Text>
            I create dedicated designs and turn them into real products with
            React and passion 🔥🔥🔥!
          </Text>
        </Box>

        <SocialIcons color='#000A12' />

        <Box>
          <Link href='#work'>
            <Button variant='filled'>SEE MY WORK</Button>
          </Link>
          <a href='#'>
            <Button variant='outlined'> RESUME</Button>
          </a>
        </Box>
      </Flex>

      <Box sx={styles.heroImage}>
        <Image
          src={HeroImage}
          alt='Workspace'
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
    flexDirection: 'column',
    justifyContent: 'center',
    width: ['100%', '50%'],
    p: [12, 16],
    div: {
      mb: [2, 3],
      button: {
        mr: 4,
        mb: [4, 0],
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
