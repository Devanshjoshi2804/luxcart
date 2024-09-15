import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior className="nav-link">
            Home
          </Link>
        </li>
        {/* ... other navigation items ... */}
      </ul>
    </nav>
  );
};

export default Navbar;
