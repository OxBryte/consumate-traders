import './App.css';
import { Box } from '@chakra-ui/react';
import PageLayout from './components/page-layout';
import '../src/styles/global.css'

import Herosection from './components/herosection';
import Productsection from './components/productsection';
import Testimonial from './components/testimonials';
import Lastcta from './components/lastcta';
import Faq from './components/faq';

function App() {
  return (
    <PageLayout navbar={false} footer={true}>
      <Box>
        {/* <Heading fontSize={56}>
            Hey mate! good to be here
          </Heading> */}
        <Herosection />
        <Productsection />
        <Testimonial />
        <Faq />
        <Lastcta />
      </Box>
    </PageLayout>
  );
}

export default App;
