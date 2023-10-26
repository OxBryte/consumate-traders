import logo from './logo.svg';
import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import PageLayout from './components/page-layout';
import ContainLayout from './components/page-layout/container';
import '../src/styles/global.css'

import Herosection from './components/herosection';
import Productsection from './components/productsection';
import Testimonial from './components/testimonials';
import Lastcta from './components/lastcta';
import Footer from './components/footer';

function App() {
  return (
    <PageLayout navbar={true} footer={true}>
      <ContainLayout>
        <Box>
          {/* <Heading fontSize={56}>
            Hey mate! good to be here
          </Heading> */}
      <Herosection/>
      <Productsection />
      <Testimonial />
      <Lastcta />
      <Footer />
        </Box>
      </ContainLayout>
    </PageLayout>
  );
}

export default App;
