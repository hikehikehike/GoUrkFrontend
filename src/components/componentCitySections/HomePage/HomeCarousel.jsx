import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryWrapper = styled.div`
width: 100%;
heiht:750px;
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
      original: 'https://via.placeholder.com/600/92c952',
      thumbnail: 'https://via.placeholder.com/600/92c952',
    },
    {
      original: 'https://via.placeholder.com/600/771796',
      thumbnail: 'https://via.placeholder.com/600/771796',
    },
    {
      original: 'https://via.placeholder.com/600/24f355',
      thumbnail: 'https://via.placeholder.com/600/24f355',
    },
  ],
};
