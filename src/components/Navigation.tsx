'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import styles from './showroom.module.css';

const destinations = [
  { href: '/customers', label: 'Customer List' },
  { href: '/orders', label: 'Trade-in' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const renderLinks = () => destinations.map(({ href, label }) => (
    <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
      onClick={() => setIsOpen(false)} className={styles.navLink}>
      {label}
    </Link>
  ));
  return (
    <nav className={styles.navigation} data-scroll-away={pathname.startsWith('/orders/new') || undefined} aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }}>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <Link href="/" onClick={() => setIsOpen(false)} className={styles.wordmark}>
            Corvette Purchase Order
          </Link>
          <div className={styles.desktopNav}>{renderLinks()}<ThemeSelector /></div>
          <button ref={toggleRef} type="button" onClick={() => setIsOpen((open) => !open)}
            className={styles.menuToggle} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen} aria-controls="responsive-navbar-nav">
            {isOpen ? <X size={22} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
        <div id="responsive-navbar-nav" hidden={!isOpen} className={styles.mobileNav}>
          {renderLinks()}<ThemeSelector />
        </div>
      </div>
    </nav>
  );
}
