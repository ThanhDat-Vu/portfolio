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
            alt='Medium project'
            layout='fill'
            objectFit='cover'
          />

          <Flex sx={styles.info}>
            <Heading as='h3'>Headphones.com Clone</Heading>
            <Text>
              A full-stack e-commerce website with a shopping cart, Stripe
              checkout, and a Sanity admin manager. This website is powered by
              Next.js.
            </Text>
            <Box>
              <a
                href='https://github.com/ThanhDat-Vu/Project-E/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='filled'>SOURCE CODE</Button>
              </a>
              <a
                href='https://project-e--thanhdat-vu.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outlined'>DEMO</Button>
              </a>
            </Box>
          </Flex>
        </Box>

        <Flex sx={styles.imageWrapper}>
          <Box sx={styles.imageS}>
            <Image
              src={ProjectS}
              alt='Small project'
              layout='fill'
              objectFit='cover'
            />

            <Flex sx={styles.info}>
              <Heading as='h3'>Personal Website</Heading>
              <Text>
                My portfolio, which was created with love and powered by
                Next.js.
              </Text>
              <Box>
                <a
                  href='https://github.com/ThanhDat-Vu/portfolio/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='filled'>SOURCE CODE</Button>
                </a>
              </Box>
            </Flex>
          </Box>

          <Box sx={styles.imageXS}>
            <Image
              src={HelloWorld}
              alt='Mini project'
              layout='fill'
              objectFit='cover'
            />

            <Flex sx={styles.info}>
              <Heading as='h3'>Mini-projects</Heading>
              <Text>These projects help me capture new concepts.</Text>
              <Box>
                <a
                  href='https://github.com/ThanhDat-Vu/mini-projects'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='filled'>SOURCE CODE</Button>
                </a>
              </Box>
            </Flex>
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

          <Flex sx={styles.info}>
            <Heading as='h3'>Cozi - Letter Exchanging with Strangers</Heading>
            <Text>
              A CRUD website built with MERN Stack The main purpose of this
              website is to allow people to share their feelings, send them to
              the world, and find someone who empathizes with those feelings.
            </Text>
            <Box>
              <a
                href='https://github.com/ThanhDat-Vu/cozi-info/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='filled'>SOURCE CODE</Button>
              </a>
              <a
                href='https://wda-01-cozi-client.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outlined'>DEMO</Button>
              </a>
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.title}>
          <Heading as='h1'>MY WORK</Heading>
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
    height: ['32vh', '60%'],
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
    height: ['32vh', '40%'],
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
    height: ['36vh', '100%'],
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
    flexDirection: 'column',
    justifyContent: 'center',
    visibility: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    px: [8, 12],
    bg: 'backdrop',
    color: 'primary',
    span: {
      mb: [2, 3],
    },
    button: {
      color: 'primary',
      mr: 4,
    },
  },

  title: {
    minWidth: ['auto', '8vw'],
    minHeight: ['max-content', 'auto'],
    position: 'relative',
    h1: {
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
