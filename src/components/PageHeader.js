import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import Docs from '../data/Docs';

const PageHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const fuse = new Fuse(Docs, {
    keys: ['title', 'content'],
    threshold: 0.4,
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map(r => r.item));
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[0].path);
    }
  };

  const handleSelect = (path) => {
    setSearchTerm('');
    setResults([]);
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <div className="page-header">
      <div className="page-header-inner">
        <h1 className="page-title">User Manual</h1>
        <div className="search-box" ref={wrapperRef}>
          <i className="fas fa-search search-icon">
          </i>
          
          <input type="text" className="search-input" placeholder="Search manual..." value={searchTerm} onChange={handleChange} onKeyDown={handleKeyDown}/>

          {showDropdown && results.length > 0 && (
            <ul className="search-dropdown">
              {results.map(doc => (
                <li
                  key={doc.path}
                  className="search-dropdown-item"
                  onClick={() => handleSelect(doc.path)}>
                  {doc.title}
                </li>
              ))}
            </ul>
          )}
          {showDropdown && results.length === 0 && searchTerm.length > 2 && (
            <ul className="search-dropdown">
              <li className="search-dropdown-item no-results">No results found.</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;