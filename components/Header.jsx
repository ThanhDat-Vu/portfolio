import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Button } from 'theme-ui';
import Logo from '../assets/my-logo-v1.svg';

export default function Header() {
  return (
    <Flex sx={styles.header}>
      <Box sx={styles.logo}>
        <Image src={Logo} alt='Logo' width='32px' height='32px' />
      </Box>
      <Flex sx={styles.navbar}>
        <Box sx={styles.spacer} />
        <Link href='#'>Home</Link>
        <Link href='#'>About</Link>
        <Link href='#'>Work</Link>
      </Flex>
      <Flex sx={styles.cta}>
        <Button variant='outlined'>CONTACT</Button>
      </Flex>
    </Flex>
  );
}

const styles = {
  header: {
    alignItems: 'stretch',
    bg: 'primary',
    position: 'sticky',
    top: '0',
    zIndex: '1',
    boxShadow: '0 2px',
  },
  logo: {
    p: [2, 3],
    boxShadow: '2px 0',
  },
  navbar: {
    flexGrow: 1,
    alignItems: 'center',
    px: 2,
    boxShadow: '2px 0',

    a: {
      textDecoration: 'none',
      fontSize: [3, 4],
      fontWeight: 'medium',
      color: 'secondary',
      p: 1,
      m: 1,

      position: 'relative',
      ':before, :after': {
        position: 'absolute',
        top: '50%',
        content: '""',
        width: '0%',
        height: '3px',
        bg: 'accent',
      },
      ':before': {
        left: 0,
      },
      ':after': {
        right: 0,
        bg: 'accent',
        transition: 'width 0.8s cubic-bezier(0.24, 0.64, 0.32, 1)',
      },
      ':hover:before': {
        width: '100%',
        transition: 'width 0.6s cubic-bezier(0.24, 0.64, 0.32, 1)',
      },
      ':hover:after': {
        bg: 'transparent',
        width: '100%',
        transition: '0s',
      },
    },
  },
  spacer: {
    flexGrow: 1,
  },
  cta: {
    alignItems: 'center',
    px: [2, 4],
  },
};
