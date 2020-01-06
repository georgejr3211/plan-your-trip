import React from 'react';
import { Icon } from 'antd';
import { NavigationMenu, NavigationItem } from './style';

const Navigation = ({ theme = 'light' }) => {
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
    <NavigationMenu theme={theme} mode='inline'>
      {data.map(menu => (
        <NavigationMenu.Item key={menu.id}>
          <NavigationItem to={menu.path}>
            <Icon type={menu.icon} />
            <span>{menu.title}</span>
          </NavigationItem>
        </NavigationMenu.Item>
      ))}
    </NavigationMenu>
  );
};

export default Navigation;
