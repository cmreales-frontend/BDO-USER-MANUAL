import React, { useState } from 'react';

const PageHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      performSearch(searchTerm);
    }
  };

  const performSearch = (term) => {
    if (!term) return;

    const searchLower = term.toLowerCase();
    const contentElements = document.querySelectorAll('.content-text, .subsection-title');
    let found = false;

    contentElements.forEach(element => {
      const originalText = element.textContent;
      element.innerHTML = originalText;

      if (originalText.toLowerCase().includes(searchLower)) {
        const regex = new RegExp(`(${term})`, 'gi');
        element.innerHTML = element.textContent.replace(
          regex,
          '<mark>$1</mark>'
        );

        if (!found) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      }
    });

    if (!found) {
      alert('No results found for: ' + term);
    }
  };

  return (
    <div className="page-header">
      <div className="page-header-inner">
        <h1 className="page-title">User Manual</h1>
        <div className="search-box">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search manual..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
