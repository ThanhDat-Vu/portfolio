import Header from './Header';
import Footer from './Footer';
import { Box } from 'theme-ui';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box sx={styles.main}>{children}</Box>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    
  },
};
