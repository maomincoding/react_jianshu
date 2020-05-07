import React from 'react';
import GlobalStyle from './assets/js/style'
import GlobalFontStyle from './assets/iconfont/iconfont'
import Header from './views/layout/header'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalFontStyle/>
      <Header/>
    </div>
  );
}

export default App;
