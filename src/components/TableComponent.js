import React, { useState } from 'react';
import { Table } from 'antd';

const TableComponent = ({
  dataSource,
  columns,
  pageSizeOptions = ['5', '10', '20', '30'],
  height = 250,
  primaryKey = 'id',
  loading = true,
}) => {
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setFilteredInfo(filters);
  };

  return (
    <Table
      tableLayout='fixed'
      scroll={{ y: height }}
      rowKey={primaryKey}
      dataSource={dataSource}
      loading={!dataSource.length ? true : false}
      columns={columns}
      onChange={handleChange}
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: pageSizeOptions,
      }}
    />
  );
};

export default TableComponent;
