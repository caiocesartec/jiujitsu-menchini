'use client';
import styles from '@/styles/page.module.css';
import MiniApresentation from '@/components/MiniApresentation/MiniApresentation';
import MestreApresentation from '@/components/MestreApresentation/MestreApresentation';
import BarDivide from '@/components/BarDivide/BarDivide';
import FaixaPreta from './../../public/Faixas/FaixaPreta.png';
import FaixaMarron from './../../public/Faixas/FaixaMarron.png';
import EmpresasParceiras from '@/components/EmpresasParceiras/EmpresasParceiras';

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <MiniApresentation />
        <BarDivide
          titleBar="Venha fazer parte da nossa familia - Mestre Bruno Menchini"
          imgPath={FaixaPreta}
        />
        <MestreApresentation />
        <BarDivide titleBar="Quem Acredita no Nosso Trabalho" imgPath={FaixaMarron} />
        <EmpresasParceiras />
      </main>
    </>
  );
}
