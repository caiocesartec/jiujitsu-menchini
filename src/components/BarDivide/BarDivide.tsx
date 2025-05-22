// BarDivide.tsx
'use client';

import styles from './BarDivide.module.css';
import Image, { StaticImageData } from 'next/image';

type BarDivideProps = {
  titleBar: string;
  imgPath: StaticImageData; // Caminho da imagem, por exemplo: '/images/FaixaPreta.png'
};

export default function BarDivide({ titleBar, imgPath }: BarDivideProps) {
  return (
    <section className={styles.barDivide}>
      <section className={styles.containerBarDivide}>
        <p>{titleBar}</p>
        <Image
          className={styles.containerBarDivideImg}
          src={imgPath}
          alt="Divide Bar"
          width={120}
          height={40}
        />
      </section>
    </section>
  );
}
