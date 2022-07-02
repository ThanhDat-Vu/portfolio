import { Flex } from 'theme-ui';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <Flex sx={styles.footer}>
      <span>@Designed and Built by me</span>
      <SocialIcons color='#FFFFFF' />
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
};
