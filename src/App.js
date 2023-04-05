import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { publicRoutes } from './Routes';
import DefaultLayout from './Component/DefaultLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
