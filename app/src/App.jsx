import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import GlobalStyle from './assets/js/style'
import GlobalFontStyle from './assets/iconfont/iconfont'
// import Header from './views/layout/header'
import Hook from '../src/hook/hook'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalFontStyle/>
      <Provider store={store}>
         {/* <Header/> */}
         <Hook/>
      </Provider>
    </div>
  );
}

export default App;
