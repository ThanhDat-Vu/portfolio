import { Box } from 'theme-ui';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoCodepen,
} from 'react-icons/io';

export default function SocialIcons({ color }) {
  return (
    <Box sx={styles.socialIcons}>
      <a
        href='https://www.linkedin.com/in/thanhdatvu/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoLinkedin size='24px' color={color} />
      </a>
      <a
        href='https://github.com/ThanhDat-Vu/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoGithub size='24px' color={color} />
      </a>
      <a
        href='https://www.facebook.com/vthdat/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoFacebook size='24px' color={color} />
      </a>
      <a
        href='https://codepen.io/thanhdat-vu/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoCodepen size='24px' color={color} />
      </a>
    </Box>
  );
}

const styles = {
  socialIcons: {
    ml: -4,
    a: {
      ml: 4,
    },
  },
};
