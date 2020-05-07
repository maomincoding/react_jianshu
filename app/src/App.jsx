import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import GlobalStyle from './assets/js/style'
import GlobalFontStyle from './assets/iconfont/iconfont'
import Header from './views/layout/header'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalFontStyle/>
      <Provider store={store}>
         <Header/>
      </Provider>
    </div>
  );
}

export default App;
