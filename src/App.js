import './App.css';
import { Box } from '@chakra-ui/react';
import PageLayout from './components/page-layout';
import '../src/styles/global.css'

import Herosection from './components/herosection';
import Productsection from './components/productsection';
import Testimonial from './components/testimonials';
import Lastcta from './components/lastcta';

function App() {
  return (
    <PageLayout navbar={true} footer={true}>
      <Box>
        {/* <Heading fontSize={56}>
            Hey mate! good to be here
          </Heading> */}
        <Herosection />
        <Productsection />
        <Testimonial />
        <Lastcta />
      </Box>
    </PageLayout>
  );
}

export default App;
