import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store } from './app/store';
import Home from './pages/Home';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
