import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './Theme';
import Card from './components/Card';

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken('J1da4woAs21b43kiAd');
    }, 4000)
  }, [])

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Card />
    </ThemeContext.Provider>
  );
}

export default App;