import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export const Container = styled.div`

`;

export const NavigationMenu = styled(Menu)`
  border: none !important;
`;

export const NavigationItem = styled(Link)`
  color: inherit;
`;
