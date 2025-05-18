import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './Slider.module.css';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
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
            src="/slider/slide1.jpg"
            alt="Slide 1"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider1-mob.jpg"
            alt="Slide 1 mob"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/slider/slide2.jpg"
            alt="Slide 2"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider2-mob.jpg"
            alt="Slide 2 mob"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/slider/slide3.jpg"
            alt="Slide 3"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider3-mob.jpg"
            alt="Slide 3 mob"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className={styles.deskSlider}
            quality={100}
            src="/slider/slide4.jpg"
            alt="Slide 4"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            className={styles.mobSlider}
            quality={100}
            src="/slider/slider4-mob.jpg"
            alt="Slide 4 mob"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
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
    </>
  );
}
