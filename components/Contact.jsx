import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Flex,
  Box,
  Heading,
  Text,
  Label,
  Input,
  Textarea,
  Button,
} from 'theme-ui';
import Image from 'next/image';
import RedTelephone from '../assets/red-telephone.jpg';
import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5';

export default function Contact() {
  const form = useRef();

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();
    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'Nne7fNrQTzS5lpcbX'
      )
      .then(() => {
        setShowSuccessMsg(true);
        setTimeout(() => {
          setShowSuccessMsg(false);
        }, 5000);
      });
  };

  return (
    <Flex sx={styles.contact} id='contact'>
      <Flex sx={styles.column}>
        <Box sx={styles.title}>
          <Heading as='h1'>CONTACT ME</Heading>
        </Box>

        <Box sx={styles.contactInfo}>
          <Box sx={styles.image}>
            <Image
              src={RedTelephone}
              alt='Red telephone'
              layout='fill'
              objectFit='cover'
              objectPosition='top left'
            />
          </Box>
          <Box sx={styles.info}>
            <Flex>
              <IoCallSharp size='24px' />
              <Text>0369676470</Text>
            </Flex>
            <Flex>
              <IoMailSharp size='24px' />
              <Text>thanhdatvu.work@gmail.com</Text>
            </Flex>
            <Flex>
              <IoLocationSharp size='24px' />
              <Text>Ho Chi Minh City</Text>
            </Flex>
          </Box>
          <Box sx={styles.text}>
            <Heading as='h2'>I&apos;d love to hear from you!</Heading>
            <Text>
              Got a project you would like me to work on? Or how about just a
              friendly chat.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Flex sx={styles.column}>
        <Box as='form' ref={form} onSubmit={sendEmail} sx={styles.contactForm}>
          <Flex>
            <Input name='name' id='name' placeholder='Name' required />
            <Label htmlFor='name'>Your name</Label>
          </Flex>

          <Flex>
            <Input
              name='email'
              id='email'
              type='email'
              placeholder='Email'
              required
            />
            <Label htmlFor='email'>Your email</Label>
          </Flex>

          <Flex>
            <Input name='subject' id='subject' placeholder='Subject' required />
            <Label htmlFor='subject'>Subject</Label>
          </Flex>

          <Flex>
            <Textarea
              name='message'
              id='message'
              rows={8}
              placeholder='Message'
            />
            <Label htmlFor='message'>Message</Label>
          </Flex>

          <Button type='submit' variant='filled'>
            SEND MESSAGE
          </Button>

          {showSuccessMsg && <Text sx={styles.successMsg}>Message sent!</Text>}
        </Box>
      </Flex>
    </Flex>
  );
}

const styles = {
  contact: {
    flexDirection: ['column', 'row'],
    minHeight: ['max-content', '100vh'],
    boxShadow: '0 2px',
  },

  column: {
    flexDirection: ['column', 'row'],
    alignItems: 'center',
    width: ['100%', '50%'],
    boxShadow: ['none', '-2px 0'],
  },

  contactInfo: {
    width: '100%',
    height: '100%',
    boxShadow: ['0 -2px', '-2px 0'],
    position: 'relative',
  },

  image: {
    width: '100%',
    height: ['28vh', '100%'],
    position: 'relative',
    img: {
      zIndex: -1,
    },
  },

  text: {
    color: 'primary',
    position: 'absolute',
    top: [8, 16],
    left: [4, 8],
    p: 8,
    bg: 'backdrop',
    h2: {
      fontSize: [5, 6],
    },
  },

  info: {
    width: '100%',
    color: ['secondary', 'primary'],
    position: ['static', 'absolute'],
    bottom: 16,
    left: 0,
    px: [12, 16],
    pt: 12,
    pb: [0, 6],
    bg: ['none', 'secondary'],
    div: {
      alignItems: 'center',
      mb: 6,
      span: {
        ml: 4,
      },
    },
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

  contactForm: {
    width: ['100%'],
    height: 'min-content',
    border: '2px solid',
    p: [8, 12],
    m: [4, 8],
    fontSize: [2, 3],
    lineHeight: '1.5',
    div: {
      flexDirection: 'column-reverse',
      'input, textarea': {
        fontFamily: 'primary',
        border: 0,
        borderBottom: '2px solid',
        borderRadius: 0,
        outline: 0,
        mb: 6,
        ':focus': {
          borderColor: 'accent',
        },
        ':focus + label': {
          color: 'accent',
        },
      },
    },
  },

  successMsg: {
    display: 'inline',
    ml: 4,
  },
};
