import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { Button } from './components/atoms/Button';
import { TextInput } from './components/atoms/TextInput';
import { Toast } from './components/atoms/Toast';

import './App.css';

function App() {
  const [ show, updateShow ] = useState(false);

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
      <div>
        <Button onClick={() => updateShow(true)}>Show toast</Button>
        <Toast message="I am toast congrulations! yeheeeeey!" show={show} onClose={() => updateShow(false) } />
      </div>
    </div>
  );
}

export default App;
