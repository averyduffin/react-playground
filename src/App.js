import React from 'react';
import './App.css';
import Flex from './components/Flex'
import Box from './components/Box';

const itemHeight = {
  // height: '40px'
  marginBottom: 20
}

const boxHeight = {
  // height: '300px'
}

function App() {
  return (
    <div className="App">
      <Flex direction='column' style={boxHeight} justifyContent='space-between' alignItems='stretch'>
        <Flex.Item style={itemHeight}>
          <Box color='purple'>Box 1</Box>
        </Flex.Item>
        <Flex.Item style={itemHeight}>
          <Flex direction='row' justifyContent='space-between' alignItems='stretch'>
            <Flex.Item>
              <Box color='blue' height={200}>Box 2</Box>
            </Flex.Item>
            <Flex.Item>
              <Box color='blue'>Box 2</Box>
            </Flex.Item>
          </Flex>
        </Flex.Item>
        <Flex.Item style={itemHeight}>
          <Box color='red'>Box 3</Box>
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
