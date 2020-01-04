import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from './style/global';
import 'antd/dist/antd.css';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Content from './components/layout/Content';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Container>
      <Layout>
        <Router>
          <Sidebar collapsed={collapsed} />
          <Layout>
            <Header
              user='George'
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            <Switch>
              <Content />
            </Switch>
          </Layout>
        </Router>
      </Layout>
    </Container>
  );
};

export default App;
