
import React from 'react';
import SignPage from './Pages/MainPage/SignPage';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';


export const ThemeContext = React.createContext({});

const theme = {
  theme: 'dark'

}
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Layout>
          {/* <MainPage /> */}
          <SignPage />
        </Layout>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
