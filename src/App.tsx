import React from 'react';
import './App.css';

import { RootNavigator } from './navigators';
import { TodoProvider, UserProvider } from './context';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TodoProvider>
          <RootNavigator />
        </TodoProvider>
      </UserProvider>
    </div>
  );
}

export default App;
