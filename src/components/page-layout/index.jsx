import { Box } from '@chakra-ui/react';
import Footer from '../footer';
import Navbar from '../navbar';

const PageLayout = ({ children, navbar = true, footer = true }) => {
  return (
    <Box>
      {navbar && <Navbar />}
      {children}
      {footer && <Footer />}
    </Box>
  );
};

export default PageLayout;
