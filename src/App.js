import React, { useState } from 'react';
import { Layout } from 'antd';

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
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header user='George' collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content />
        </Layout>
      </Layout>
    </Container>
  );
};

export default App;
