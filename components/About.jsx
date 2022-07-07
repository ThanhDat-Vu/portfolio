import { Flex, Box, Heading, Text } from 'theme-ui';
import Image from 'next/image';
import Me from '../assets/me.jpg';

export default function About() {
  return (
    <Flex sx={styles.about} id='about'>
      <Flex sx={styles.left}>
        <Box sx={styles.title}>
          <Heading as='h1'>ABOUT ME</Heading>
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
          Hello, my name is Vu Thanh Dat, or Daniel for short. I have experience
          in full-stack web development, especially in creating React
          applications.
        </Text>
        <Text>
          My education at the University of Information Technology (UIT)
          provided me with a solid foundation in programming. I also have a good
          understanding of UX and UI design. With knowledge and passion, I
          strive to make my projects as perfect as possible by constantly
          improving them. My top priority is to optimize website performance. I
          focus on making websites more responsive and user-friendly, as well as
          increasing their accessibility. Currently, I am learning how to
          improve website SEO. As an enthusiastic learner, I am willing to adapt
          and switch to any technology that fits my project best.
        </Text>
        <Text>
          I am looking for opportunities to work on larger projects and land my
          first job.
        </Text>
        <Text> If you are interested in my work, reach out to me!</Text>
        <Text>thanhdatvu.work@gmail.com</Text>
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
    h1: {
      position: ['static', 'absolute'],
      top: '50%',
      left: '50%',
      transform: ['none', 'translateX(-50%) translateY(-50%) rotate(-90deg)'],
      mt: 4,
      mb: 2,
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
    p: [12, 16],
    textAlign: 'justify',
    span: {
      fontSize: [2, '18px'],
      mb: 4,
    },
  },
};
