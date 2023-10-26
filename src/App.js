import logo from './logo.svg';
import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import PageLayout from './components/page-layout';
import ContainLayout from './components/page-layout/container';

function App() {
  return (
    <PageLayout navbar={true} footer={true}>
      <ContainLayout>
        <Box>
          <Heading fontSize={56}>
            Hey mate! good to be here
          </Heading>
        </Box>
      </ContainLayout>
    </PageLayout>
  );
}

export default App;
