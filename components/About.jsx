import { Flex, Box, Heading, Text } from 'theme-ui';
import Image from 'next/image';
import Me from '../assets/me.jpg';

export default function About() {
  return (
    <Flex sx={styles.about} id='about'>
      <Flex sx={styles.left}>
        <Box sx={styles.title}>
          <Heading as='h3'>ABOUT ME</Heading>
        </Box>
        <Box sx={styles.image}>
          <Image
            src={Me}
            alt='Working at night.'
            layout='fill'
            objectFit='cover'
          />
        </Box>
      </Flex>
      <Flex sx={styles.right}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Consectetur adipiscing elit pellentesque habitant morbi tristique
          senectus et. Mollis nunc sed id semper risus in. Nisl purus in mollis
          nunc sed id. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Id
          nibh tortor id aliquet lectus proin nibh. Tincidunt vitae semper quis
          lectus nulla at. Malesuada proin libero nunc consequat. Aenean vel
          elit scelerisque mauris. Gravida in fermentum et sollicitudin ac.
          Vitae turpis massa sed elementum tempus egestas sed sed. Imperdiet dui
          accumsan sit amet nulla facilisi morbi tempus. Elementum nisi quis
          eleifend quam adipiscing vitae proin sagittis nisl. Diam quam nulla
          porttitor massa id neque aliquam.
        </Text>
      </Flex>
    </Flex>
  );
}

const styles = {
  about: {
    flexDirection: ['column', 'row'],
    minHeight: ['max-content', '100vh'],
    boxShadow: '0px 2px',
  },
  left: {
    flexDirection: ['column', 'row'],
    alignItems: 'center',
    width: ['100%', '50%'],
  },
  title: {
    minWidth: ['auto', '8vw'],
    minHeight: ['max-content', 'auto'],
    position: 'relative',
    h3: {
      position: ['static', 'absolute'],
      top: '50%',
      left: '50%',
      mt: 4,
      mb: 2,
      transform: ['none', 'translateX(-50%) translateY(-50%) rotate(-90deg)'],
      letterSpacing: '12px',
      whiteSpace: 'nowrap',
    },
  },
  image: {
    width: '100%',
    height: ['40vh', '100%'],
    position: 'relative',
    boxShadow: ['0 -2px', '-2px 0px'],
    img: {
      zIndex: -1,
    },
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: ['100%', '50%'],
    boxShadow: ['0 -2px', '-2px 0px'],
    px: [12, 16],
    py: 16,
    textAlign: 'justify',
    p: {
      mb: 8,
    },
  },
};
