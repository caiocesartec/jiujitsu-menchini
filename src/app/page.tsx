'use client';
import styles from '@/styles/page.module.css';
import Slider from '@/components/Slider/Slider';

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.sliderPrincipal}>
        <Slider />
      </section>
    </main>
  );
}
