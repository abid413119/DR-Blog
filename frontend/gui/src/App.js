import React, { Component } from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './container/layout';
import BaseRouter from './router';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
