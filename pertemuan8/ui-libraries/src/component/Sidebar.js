import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="menu is-light">
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/dashboard" exact>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/table-courses">Course</NavLink>
        </li>
           <li>
          <NavLink to="/table-trainer">Trainer</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;