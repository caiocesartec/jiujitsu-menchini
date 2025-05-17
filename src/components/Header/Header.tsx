'use client';

import styles from './Header.module.css';
import HeaderOptions from '@/components/HeaderOptions/HeaderOptions';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);

    return () => {
      window.removeEventListener('resize', checkResolution);
    };
  }, []);

  const deskOrMobContainer = `${styles.containerOptionsMenu} ${isMobile ? styles.containerOptionsMenuMobile : ''}`;

  return (
    <header className={styles.headerMain}>
      {/* opções do menu */}
      <section className={deskOrMobContainer}>
        {isMobile && (
          <nav>
            <ul>
              <li className={styles.mobileMenuIcon}>
                <a>
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </li>
            </ul>
          </nav>
        )}
        <HeaderOptions />
      </section>
    </header>
  );
}
