import styles from "./Header.module.css"
import HeaderOptions from "@/components/HeaderOptions/HeaderOptions"

export default function Header() {
    return (
        <header className={styles.headerMain}>           
            {/* opções do menu */}
            <section className={styles.containerOptionsMenu}>
                <nav> 
                    <ul>
                        <HeaderOptions/>
                    </ul>
                </nav>
            </section>
        </header>
    )
}