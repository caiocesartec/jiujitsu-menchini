'use client';
import styles from '@/styles/page.module.css';
import MiniApresentation from '@/components/MiniApresentation/MiniApresentation';
import MestreApresentation from '@/components/MestreApresentation/MestreApresentation';
import BarDivide from '@/components/BarDivide/BarDivide';

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <MiniApresentation />
        <BarDivide />
        <MestreApresentation />
      </main>
    </>
  );
}
