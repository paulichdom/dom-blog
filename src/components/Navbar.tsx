import { Group } from '@mantine/core';
import { useState } from 'react';
import classes from './Navbar.module.css';

const navItems = [
  'About',
  'Articles',
  'Projects',
  'Speaking',
  'Uses',
];

export function Navbar() {
  const [active, setActive] = useState('About');

  return (
    <div className={classes.container}>
      <div className={classes.navGroup}>
        {navItems.map((item) => (
          <button
            key={item}
            className={
              active === item
                ? `${classes.navItem} ${classes.navItemActive}`
                : classes.navItem
            }
            onClick={() => setActive(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
} 