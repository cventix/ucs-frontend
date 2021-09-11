import Layout from '../layout';
import React from 'react';
import Carousel from '../components/Hybrid/Carousel';
import styles from '../assets/styles/styles.webflow.module.scss';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div style={{ marginTop: '200px' }} />
      <div style={{ height: '300px', marginTop: '100px', backgroundColor: '#000' }}>
        <Carousel settings={settings} titleClassName={styles['podcast-heading']}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Carousel>
      </div>
    </Layout>
  );
}
