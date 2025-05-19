import Image from 'next/image';
import MestreBMmenor from '../../../public/MestreBM.jpg';
import styles from './MestreApresentation.module.css';

export default function MestreApresentation() {
  return (
    <section className={styles.mestreApresentation}>
      <div className={styles.mestreApresentationContatiner}>
        <section className={styles.mestreBrunoImage}>
          <Image
            className={styles.mestreBrunoImg}
            src={MestreBMmenor}
            alt="Slide 1"
            width={370}
            height={420}
          />
        </section>

        <section className={styles.mestreBrunoText}>
          <p>Foram anos no tatame, mas a maior luta sempre foi fora dele.</p>
          <p>
            Desde cedo, ele entendeu que o jiu-jitsu não era apenas uma arte marcial — era um estilo
            de vida. Disciplina, humildade, dor, persistência. Cada queda era uma lição. Cada
            finalização, um capítulo vencido na própria história.
          </p>

          <p>
            <span>Faixa preta 3º grau formado pela Ryan Gracie</span>, ele carrega não apenas uma
            graduação, mas um compromisso com a evolução. São{' '}
            <span>mais de 15 anos de experiência dando aulas</span>, moldando alunos, formando
            atletas e impactando vidas.
          </p>

          <p>
            Ao longo da caminhada, ele buscou aprender com os melhores. Já participou de{' '}
            <span>mais de 60 seminários</span>, dividindo o tatame com nomes que ajudaram a
            construir o jiu-jitsu mundial:
          </p>

          <p>
            <span>
              Renzo Gracie, Joe Moreira, Babalu, Rafael dos Anjos, Rodolfo Vieira, Marco Ruas
            </span>{' '}
            e o lendário <span>Roger Gracie</span>, referência máxima de técnica e domínio no
            esporte.
          </p>

          <p>
            Mas o conhecimento não ficou só nas academias. Ele também levou o jiu-jitsu ao serviço
            público, aplicando seu conhecimento em situações reais de combate e proteção.{' '}
            <span>Treinou equipes da Polícia Militar</span>, incluindo unidades como o{' '}
            <span>BAEP e a Cavalaria</span>, com foco em defesa pessoal e controle de situações de
            risco.
          </p>

          <p>
            Hoje, com <span>11 anos como faixa preta</span>, ele é muito mais do que um lutador: é
            um exemplo de superação.
          </p>

          <p>
            Não pelos títulos — mas pela jornada. Pela constância. Por nunca ter parado, mesmo
            quando o caminho parecia pesado demais.
          </p>

          <p>
            Porque no jiu-jitsu, como na vida, o que define um verdadeiro mestre{' '}
            <span>
              não é quantas vezes ele vence — é quantas vezes ele se levanta para continuar lutando.
            </span>
          </p>
        </section>
      </div>
    </section>
  );
}
