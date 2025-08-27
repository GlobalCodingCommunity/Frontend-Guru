import React, { useState, useEffect } from 'react';
import { fetchSidebarData } from '../utils/ApiClient';

// TODO Q5
const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const results = await fetchSidebarData();
        const list = [];

        if (typeof results.count === 'number') {
          for (let i = 1; i <= results.count; i++) {
            const id = `line_${i}`;
            const content = results[id];
            if (content) {
              list.push({ id, content });
            }
          }
        }
        setSidebarItems(list);
      } catch (e) {
        console.log(e.message);
      }
    };

    loadData();
  }, []);

  return (
    <div className="sidebar" data-testid="sidebar">
      {sidebarItems.map(({ id, content }) => (
        <div key={id} className="sidebar-item">
          {content}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
