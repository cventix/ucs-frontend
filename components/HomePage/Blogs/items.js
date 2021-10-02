export const items = (data) => {
  const itemList = [];
  data &&
    Object.values(data).forEach((element) => {
      itemList.push({
        id: element._id,
        img: element.hero,
        title: element.name,
        description: element.author,
        link: element.slug,
      });
    });
  return itemList;
};

export const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1890,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
