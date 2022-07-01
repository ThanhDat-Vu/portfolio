import { Box, Flex } from 'theme-ui';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoCodepen,
} from 'react-icons/io';

export default function Footer() {
  return (
    <Flex sx={styles.footer}>
      <span>@Designed and Built by me</span>
      <Box sx={styles.socialIcons}>
        <a href='#'>
          <IoLogoLinkedin size='24px' color='white' />
        </a>
        <a href='#'>
          <IoLogoGithub size='24px' color='white' />
        </a>
        <a href='#'>
          <IoLogoFacebook size='24px' color='white' />
        </a>
        <a href='#'>
          <IoLogoCodepen size='24px' color='white' />
        </a>
      </Box>
    </Flex>
  );
}

const styles = {
  footer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'row'],
    color: 'primary',
    bg: 'secondary',
    px: 8,
    py: 16,

    span: {
      mb: [4, 0],
    }
  },
  socialIcons: {
    a: {
      ml: 4,
    },
  },
};
