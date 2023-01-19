import React from 'react';
import './App.css';

import { RootNavigator } from './navigators';
import { TodoProvider } from './context';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <RootNavigator />
      </TodoProvider>
    </div>
  );
}

export default App;
