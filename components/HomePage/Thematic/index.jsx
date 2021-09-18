import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import DialogGallery from '../../Hybrid/DialogGallery';

import { items, settings } from './items';

const Thematic = () => {
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
        carouselClassName={editorStyle['events']}
        titleClassName={style['carousel-heading']}
        items={items}
        imageWidth={274}
        imageHeight={180}
        hoverActionType="fadeButton"
        linkType="play-action"
      />
      {openDialogGalley && <DialogGallery />}
    </>
  );
};

export default Thematic;
