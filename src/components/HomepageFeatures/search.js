import React, { useState } from 'react';
import Search from 'react-search-input';

const MyPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      <Search
        onChange={handleSearch}
        value={searchTerm}
        placeholder="Search"
        className="search-input"
        style={{ marginRight: 20 }}
        throttle={200}
      />
    </div>
  );
};

export default MyPage;