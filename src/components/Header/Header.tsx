import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.headerMain}>
            {/* logo */}
            {/* <div className={styles.logoContainer}>
                <Image
                className={styles.logo}
                src="/logoAcademia.png"
                alt="Next.js logo"
                width={100}
                height={100}
                priority
                />
            </div> */}
            
            {/* opções do menu */}
            <section className={styles.containerOptionsMenu}>
                <nav> 
                    <ul>
                        <li className={styles.menuHamburguer}>
                            <Link href="/">
                                <FontAwesomeIcon icon={faBars} /> 
                            </Link>
                        </li>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                        <li><Link href="/projeto-faixinha-preta">Projeto Faixinha Preta</Link></li>
                        <li><Link href="/equipe">Equipe</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}