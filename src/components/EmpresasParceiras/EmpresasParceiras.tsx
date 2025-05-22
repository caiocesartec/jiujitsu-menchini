import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './EmpresasParceiras.module.css';

export default function EmpresasParceiras() {
  return (
    <section className={styles.sliderEmpresasParceiras}>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/LogoEmpresas/baep.png"
            alt="Slide 1"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/LogoEmpresas/baep.png"
            alt="Slide 1 mob"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/LogoEmpresas/itemm.png"
            alt="Slide 2"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider2-mob.jpg"
            alt="Slide 2 mob"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/LogoEmpresas/prefeituraSaoBernardo.png"
            alt="Slide 2"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider2-mob.jpg"
            alt="Slide 2 mob"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/LogoEmpresas/danielBuissa.png"
            alt="Slide 2"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider2-mob.jpg"
            alt="Slide 2 mob"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/LogoEmpresas/pmLogo.png"
            alt="Slide 2"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider2-mob.jpg"
            alt="Slide 2 mob"
            width={800}
            height={100}
            style={{ width: '300px', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Botões de navegação */}
      <div
        className="swiper-button-prev swiper-button-prev-custom"
        style={{ color: '#e14340' }}
      ></div>
      <div
        className="swiper-button-next swiper-button-next-custom"
        style={{ color: '#e14340' }}
      ></div>
    </section>
  );
}
