import Image from 'next/image';
import { Flex, Box, Heading, Text, Button } from 'theme-ui';
import ProjectL from '../assets/projectL.jpg';
import ProjectM from '../assets/projectM.jpg';
import ProjectS from '../assets/projectS.jpg';
import HelloWorld from '../assets/hello-world.jpg';

export default function Work() {
  return (
    <Flex sx={styles.container} id='work'>

      <Flex sx={styles.left}>

        <Box sx={styles.imageM}>
          <Image
            src={ProjectM}
            alt='Big project'
            layout='fill'
            objectFit='cover'
          />
          <Box sx={styles.info}>
            <Heading as='h4'>Title</Heading>
            <Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box>
              <Button variant='filled'>VIEW PROJECT</Button>
              <Button variant='outlined'>DEMO</Button>
            </Box>
          </Box>
        </Box>

        <Flex sx={styles.imageWrapper}>
          <Box sx={styles.imageS}>
            <Image
              src={ProjectS}
              alt='Big project'
              layout='fill'
              objectFit='cover'
            />
            <Box sx={styles.info}>
              <Heading as='h4'>Title</Heading>
              <Box>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Box>
              <Box>
                <Button variant='filled'>VIEW PROJECT</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.imageXS}>
            <Image
              src={HelloWorld}
              alt='Big project'
              layout='fill'
              objectFit='cover'
            />
            <Box sx={styles.info}>
              <Heading as='h4'>Title</Heading>
              <Box>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
              <Box>
                <Button variant='filled'>VIEW PROJECT</Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Flex sx={styles.right}>
        <Box sx={styles.imageL}>
          <Image
            src={ProjectL}
            alt='Big project'
            layout='fill'
            objectFit='cover'
          />
          <Box sx={styles.info}>
            <Heading as='h4'>Title</Heading>
            <Box>
              <Text>
                DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box>
              <Button variant='filled'>VIEW PROJECT</Button>
              <Button variant='outlined'>DEMO</Button>
            </Box>
          </Box>
        </Box>
        
        <Box sx={styles.title}>
          <Heading as='h3'>MY WORK</Heading>
        </Box>
      </Flex>
    </Flex>
  );
}

const styles = {
  container: {
    flexDirection: ['column-reverse', 'row'],
    minHeight: ['max-content', '100vh'],
    boxShadow: '0 2px',
  },
  left: {
    flexDirection: ['column-reverse', 'column'],
    width: ['100%', '50%'],
  },
  imageM: {
    width: '100%',
    height: ['30vh', '60%'],
    position: 'relative',
    boxShadow: ['0 -2px', '0px 2px'],
    img: {
      zIndex: -1,
    },
    ':hover div': {
      visibility: 'visible',
    },
  },
  imageWrapper: {
    height: ['35vh', '40%'],
    boxShadow: ['0 -2px', 'none'],
  },
  imageS: {
    width: '60%',
    height: '100%',
    position: 'relative',
    boxShadow: '2px 0px',
    img: {
      zIndex: -1,
    },
    ':hover div': {
      visibility: 'visible',
    },
  },
  imageXS: {
    width: '40%',
    height: '100%',
    position: 'relative',
    img: {
      zIndex: -1,
    },
    ':hover div': {
      visibility: 'visible',
    },
  },
  right: {
    flexDirection: ['column-reverse', 'row'],
    alignItems: 'center',
    width: ['100%', '50%'],
  },
  imageL: {
    width: '100%',
    height: ['40vh', '100%'],
    position: 'relative',
    boxShadow: ['0 -2px', '2px 0, -2px 0'],
    img: {
      zIndex: -1,
    },
    ':hover div': {
      visibility: 'visible',
    },
  },
  info: {
    visibility: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    p: [8, 12],
    bg: 'backdrop',
    color: 'primary',
    div: {
      mb: [2, 3],
      button: {
        color: 'primary',
        mr: 4,
      },
    },
    h4: {
      fontSize: 6,
    },
  },
  title: {
    minWidth: ['auto', '8vw'],
    minHeight: ['max-content', 'auto'],
    position: 'relative',
    h3: {
      position: ['static', 'absolute'],
      top: '50%',
      right: '50%',
      mt: 4,
      mb: 2,
      transform: ['none', 'translateX(50%) translateY(-50%) rotate(90deg)'],
      letterSpacing: '12px',
      whiteSpace: 'nowrap',
    },
  },
};
