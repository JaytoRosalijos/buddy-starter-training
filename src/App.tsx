import React from 'react';
import './App.css';

import { Button } from './components/atoms/button';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <Button>Click Me</Button>
      <Button variance="secondary">Click Me</Button>
      <Button variance="text" block>Click Me</Button>
      <Button variance="text" icon={<SearchOutlined />}>Click Me</Button>
      <Button variance="error">Click Me</Button>
      <Button shape="circle" size="large"><SearchOutlined /></Button>
    </div>
  );
}

export default App;
