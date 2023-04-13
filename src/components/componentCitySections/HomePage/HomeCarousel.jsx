/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryWrapper = styled.div`
width: 100%;
height: 800px;
margin: 0;
margin-bottom: 108px;
`;

export const HomeCarousel = ({ images }) => (
  <GalleryWrapper>
    <ImageGallery
      items={images}
      autoPlay={false}
      showThumbnails={false}
      showBullets
      showPlayButton={false}
    />
  </GalleryWrapper>

);

HomeCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
};

HomeCarousel.defaultProps = {
  images: [
    {
      original: 'https://media.cnn.com/api/v1/images/stellar/prod/170505152440-lviv-1306387.jpg?q=h_900,w_1600,x_0,y_0/w_1280',
      thumbnail: 'https://media.cnn.com/api/v1/images/stellar/prod/170505152440-lviv-1306387.jpg?q=h_900,w_1600,x_0,y_0/w_1280',
    },
    {
      original: 'https://expatexplore.com/blog/wp-content/uploads/2019/10/the-southern-bridge-across-the-dnieper-in-kiev.jpg',
      thumbnail: 'https://expatexplore.com/blog/wp-content/uploads/2019/10/the-southern-bridge-across-the-dnieper-in-kiev.jpg',
    },
    {
      original: 'https://via.placeholder.com/600/24f355',
      thumbnail: 'https://via.placeholder.com/600/24f355',
    },
  ],
};
