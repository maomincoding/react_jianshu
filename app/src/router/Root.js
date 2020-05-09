import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import UseEffect from '../hook/useEffect'
import UseState from '../hook/useState'
import UseRef from '../hook/useRef'

function Root() {
  return (
          <BrowserRouter>
              <div>
                <Route exact={true} path="/" component={UseState}></Route>
                <Route exact={true} path="/UseEffect" component={UseEffect}></Route>
                <Route exact={true} path="/UseRef" component={UseRef}></Route>
              </div>
          </BrowserRouter>
  );
}

export default Root;