import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Carousel from '../../Hybrid/Carousel';
import DialogGallery from '../../Hybrid/DialogGallery';
import style from './thematic.module.scss';

const Thematic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const router = useRouter();
  const { gallery } = router.query;
  const [openDialogGalley, setOpenDialogGalley] = useState(false);
  useEffect(() => {
    if (gallery) {
      setOpenDialogGalley(true);
    } else {
      setOpenDialogGalley(false);
    }
  }, [router]);

  const items = [
    {
      id: 1,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 2,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 3,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 4,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 5,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 6,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 7,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 8,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
  ];
  return (
    <>
      <Link href={{ pathname: '/', query: { gallery: 'test' } }}>
        <a>path</a>
      </Link>
      <Carousel
        settings={settings}
        title="Thematic"
        carouselClassName={style['events']}
        titleClassName={style['heading']}
        items={items}
        imageWidth={274}
        imageHeight={180}
        linkType="play-action"
        hoverActionType="fadeButton"
      />
      {openDialogGalley && <DialogGallery />}
    </>
  );
};

export default Thematic;
