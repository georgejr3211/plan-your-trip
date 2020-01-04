import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { Container } from './style';

const List = () => {
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState({});

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'George',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'Alexandre',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Fonseca',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'Feitosa',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'Junior',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      filters: dataSource.map(data => ({ text: data.name, value: data.name })),
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setFilteredInfo(filters);
  };

  return (
    <Container>
      <Input.Search placeholder='Procurar' style={{ marginBottom: 30 }} />

      <Table
        tableLayout='fixed'
        scroll={{ y: 250 }}
        dataSource={dataSource}
        columns={columns}
        onChange={handleChange}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '30'],
        }}
      />
    </Container>
  );
};

export default List;
