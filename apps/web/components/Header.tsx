'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);


  return (
    <header className="headerMain">
      <div className="headerLeft">
        <img src="/myranslogo.png" className="myronsLogo" alt="logo" />
      </div>

      <nav className="headerNav">
        <a href="#">Menus</a>
        <a href="#">Weekly Ad</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </nav>

      <div className="headerRight">
        <a>Order Now!</a>
        <a>123-123-4567</a>
      </div>


      {isHome && (
        <div
          className={`${styles.heroImageWrapper2} ${
            scrolled ? styles.hidden : ''
          }`}
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



      {/* {isHome && !scrolled && (
        <div className={styles.heroImageWrapper}>
          <img src="/sign.png" alt="hero" className={styles.heroImage} />
          <div className={styles.scrollBG}>Scroll</div>
        </div>
      )} */}




    </header>
  );
}
