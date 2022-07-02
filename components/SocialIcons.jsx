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
      <a href='#'>
        <IoLogoLinkedin size='24px' color={color} />
      </a>
      <a href='#'>
        <IoLogoGithub size='24px' color={color} />
      </a>
      <a href='#'>
        <IoLogoFacebook size='24px' color={color} />
      </a>
      <a href='#'>
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
