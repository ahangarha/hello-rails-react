import React from "react"
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import store from './redux/configureStore'
import Greeting from "./Greeting";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div id="app" className="message-wrapper">
        <Routes>
          <Route path="*" element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App
