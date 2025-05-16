import Image from "next/image";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.headerMain}>
            {/* logo */}
            <div className={styles.logoContainer}>
                <Image
                className={styles.logo}
                src="/logo_empresa.svg"
                alt="Next.js logo"
                width={100}
                height={100}
                priority
                />
            </div>
            
            {/* opções do menu */}
            <section>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Projeto Faixinha Preta</li>
                        <li>Equipe</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}