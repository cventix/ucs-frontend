import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
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
      >
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
        <CarouselItem
          image="/images/150*150.png"
          title="Podcast - Louis Gave"
          description="August 5 - Clay Shirky: New York University"
          type="image"
          imageWidth={274}
          imageHeight={180}
        />
      </Carousel>
      {openDialogGalley && <DialogGallery />}
    </>
  );
};

export default Thematic;
