/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { Image, SwiperStyled } from './HomeCarousel.styled';

export const HomeCarousel = ({ images }) => {
  const imagesToRender = images.length < 1 ? HomeCarousel.defaultProps.images : images;

  return (
    <SwiperStyled
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {imagesToRender.map(image => (
        <SwiperSlide key={image.image}>
          <Image src={image.image} alt="" />
        </SwiperSlide>
      ))}
    </SwiperStyled>
  );
};

HomeCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
};

HomeCarousel.defaultProps = {
  images: [
    {
      image: 'https://ukraine.ua/wp-content/uploads/2020/09/Lviv-market-square.Ruslan-Lytvyn.shutterstock-1536x1024.jpg',
    },
    {
      image: 'https://cdn.turkishairlines.com/m/3ca6c0776a640b70/original/1400_500.jpg',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Operniy-1.jpg/1200px-Operniy-1.jpg',
    },
    {
      image: 'https://f.rivne.travel/city/190/ro5B6.jpg',
    },
  ],
};
