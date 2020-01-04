import React, { useState } from 'react';
import { Table } from 'antd';

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
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '13',
      name: 'John',
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
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setFilteredInfo(filters);
  };

  return (
    <div>
      <Table
        tableLayout='fixed'
        dataSource={dataSource}
        columns={columns}
        onChange={handleChange}
      />
    </div>
  );
};

export default List;
