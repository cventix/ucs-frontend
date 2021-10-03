export const items = (data) => {
  const itemList = [];
  data &&
    Object.values(data).forEach((element) => {
      itemList.push({
        id: element._id,
        img: element.img,
        title: element.title,
        description: element.description,
        link: element.slug,
        wistiaKey: element['wistia-key'],
      });
    });
  return itemList;
};
export const settings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
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
