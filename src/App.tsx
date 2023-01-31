import React from 'react';
import './App.css';
import './config/firebase';
import { RootNavigator } from './navigators';
import { TodoProvider, AuthProvider } from './context';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TodoProvider>
          <RootNavigator />
        </TodoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
