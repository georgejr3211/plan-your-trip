import React from 'react';
import { Menu, Icon } from 'antd';
import { Container } from './style';

const Navigation = () => {
  const data = [
    { id: 1, title: 'Home', path: '/', icon: 'home', children: [], status: 1 },
    {
      id: 2,
      title: 'Carrinho',
      path: '/carrinho',
      icon: 'shopping-cart',
      children: [],
      status: 1,
    },
    {
      id: 3,
      title: 'Agenda de viagem',
      path: '/agenda-viagem',
      icon: 'schedule',
      children: [],
      status: 1,
    },
    {
      id: 4,
      title: 'Movimentações',
      path: '/movimentacoes',
      icon: 'bar-chart',
      children: [],
      status: 1,
    },
    {
      id: 5,
      title: 'Documentos',
      path: '/documentos',
      icon: 'folder-open',
      children: [],
      status: 1,
    },
    {
      id: 6,
      title: 'Contatos',
      path: '/contatos',
      icon: 'contacts',
      children: [],
      status: 1,
    },
  ];

  return (
    <Container>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
        {data.map(menu => (
          <Menu.Item key={menu.id}>
            <Icon type={menu.icon} />
            <span>{menu.title}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Container>
  );
};

export default Navigation;
