import Image from 'next/image';
import LogoPng from '../../../public/logoacademia.jpg';
import styles from './MiniApresentation.module.css';

export default function MiniApresentation() {
  return (
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
            Venha aprender o Jiu-Jitsu raiz, focado 100% na defesa pessoal real. Nada de firulas ou
            lutas coreografadas — aqui o treino é direto, prático e eficaz. Aprenda a se defender de
            verdade, ganhe confiança, controle e força. Com técnicas testadas nas ruas, você estará
            pronto para qualquer situação. Chega de medo: lute por você, assuma o controle e
            torne-se sua melhor arma. Jiu-Jitsu é defesa, é atitude, é raiz! Venha treinar com a
            gente!
          </p>
        </section>
      </section>
    </section>
  );
}
