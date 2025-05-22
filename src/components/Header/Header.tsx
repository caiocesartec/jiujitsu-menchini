'use client';

import styles from './Header.module.css';
import HeaderOptions from '@/components/HeaderOptions/HeaderOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const isMobile = useIsMobile(768);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Fecha o menu quando a rota mudar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const deskOrMobContainer = `${styles.containerOptionsMenu} ${
    isMobile ? styles.containerOptionsMenuMobile : ''
  }`;

  return (
    <header className={styles.headerMain}>
      <p>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
      <section className={deskOrMobContainer}>
        {isMobile && (
          <nav>
            <ul>
              <li className={styles.mobileMenuIcon}>
                <a onClick={toggleMenu}>
                  <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </a>
              </li>
            </ul>
          </nav>
        )}
        {(!isMobile || menuOpen) && <HeaderOptions />}
      </section>
    </header>
  );
}
