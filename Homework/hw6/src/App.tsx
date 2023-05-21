
import React from 'react';
import Layout from './components/Layout/Layout';
import AppRouter from './components/AppRouter.tsx/AppRouter';
import Nav from './components/Nav/Nav';



export const ThemeContext = React.createContext({});

const theme = {
  theme: 'dark',
  setTheme: ()=> {},
}
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Nav />
        <AppRouter />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
