'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    if (!isHome) return;

    setScrolled(window.scrollY > 70);

    const onScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);


  return (
    <header className="headerMain">
      <div className="headerLeft">
        <Link href="/">
          <Image 
            src="/myranslogo.png" 
            alt="logo" 
            className="myronsLogo" 
            width={160}
            height={75}
          />
        </Link>
      </div>

      <nav className="headerNav">
        <Link href="/menus">Menus</Link>
        <Link href="/contact">Contact</Link>
        <Link href="#">Careers</Link>
        <Link href="#">About Us</Link>
      </nav>

      <div className="headerRight">
        <a>Order Now!</a>
        <a>123-123-4567</a>
      </div>




      {isHome && (
        <div
          className={`${styles.heroImageWrapper2} ${scrolled ? styles.hidden : ''}`}
        >
          <img src="/sign.png" alt="hero" className={styles.heroImage2} />
          <div className={styles.extraHeader}>
            <div className={styles.extraLeft}>
              <a className={styles.arnaudville}>Arnaudville</a>
              <div className={styles.dot1}><p>.</p></div>
            </div>

            <div className={styles.extraRight}>
              <div className={styles.dot2}><p>.</p></div>
              <a>Louisiana</a>
            </div>
          </div>
          <div className={styles.scrollNowBG}>
            <div className={styles.scrollText}>
              <a>Scroll</a>
            </div>
            <div className={styles.arrow}>
              <a>^</a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
