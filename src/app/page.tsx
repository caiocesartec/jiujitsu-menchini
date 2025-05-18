'use client';
import styles from '@/styles/page.module.css';
import Slider from '@/components/Slider/Slider';
import Image from 'next/image';
import LogoPng from '../../public/logoacademia.png';

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.miniApresentation}>
          <section className={styles.miniApresentationContainer}>
            <Image
              className={styles.miniApresentationImage}
              src={LogoPng}
              alt="Slide 1"
              width={400}
              height={400}
            />
            <section className={styles.miniApresentationText}>
              <p>
                O jiu-jitsu raiz é mais que uma luta — é uma filosofia de vida. É suor no tatame,
                respeito pelos mais antigos e disciplina que molda caráter. Não se trata só de
                vencer, mas de evoluir a cada rola, com humildade e técnica. É onde o kimono surrado
                conta histórias de superação, e a tradição é honrada em cada faixa amarrada com
                orgulho. No jiu-jitsu raiz, aprendemos a cair e levantar mais fortes, sempre.
              </p>
            </section>
          </section>
        </section>
      </main>
      <section className={styles.sliderPrincipal}>
        <Slider />
      </section>
    </>
  );
}
