import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { Button } from './components/atoms/button';
import { TextInput } from './components/atoms/text-input';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Button>Click Me</Button>
        <Button variance="secondary">Click Me</Button>
        <Button variance="text" block>Click Me</Button>
        <Button variance="text" icon={<SearchOutlined />}>Click Me</Button>
        <Button variance="error">Click Me</Button>
        <Button shape="circle" size="large"><SearchOutlined /></Button>
      </div>
      <div>
        <TextInput />
        <TextInput placeholder="Place Holder"/>
        <TextInput allowClear />
        <TextInput title="Input" allowClear />
        <TextInput prefix={<SearchOutlined />} />
      </div>
    </div>
  );
}

export default App;
