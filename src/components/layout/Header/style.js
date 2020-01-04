import styled from 'styled-components';
import { Layout, Icon, Row } from 'antd';

export const Container = styled(Layout.Header)`
  background: #fff !important;
  padding: 0 !important;
  border-bottom: 1px solid rgb(232, 232, 232);
`;

export const Trigger = styled(Icon)`
  font-size: 18px;
`;

export const RowItem = styled(Row)`
  padding: 0 20px;
`;
