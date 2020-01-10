import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './sass/index.scss';
import configureStore from "./reducers/configureStore";
import Homepage from "./screens/Homepage";
import DevTools from "./utils/DevTools";

const store = configureStore();

const App: React.FC = () => {
  return (
      <Router>
          <Provider store={store}>
              <Route path="/" component={Homepage} />
              { process.env.NODE_ENV === "development" && <DevTools /> }
          </Provider>
      </Router>
  );
};

export default App;
