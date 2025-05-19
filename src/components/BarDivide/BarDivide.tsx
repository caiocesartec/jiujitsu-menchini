import styles from './BarDivide.module.css';
import Image from 'next/image';
import FaixaPreta from '../../../public/FaixaPreta.png';

export default function BarDivide() {
  return (
    <section className={styles.barDivide}>
      <section className={styles.containerBarDivide}>
        <p>Venha fazer parte da nossa familia - Mestre Bruno Menchini</p>
        <Image
          className={styles.containerBarDivideImg}
          src={FaixaPreta}
          alt="Divide Bar"
          width={120}
          height={40}
        />
      </section>
    </section>
  );
}
