export const items = (data) => {
  const itemList = [];
  data &&
    Object.keys(data).forEach((index) => {
      itemList.push({
        id: data[index]._id,
        // img: data[index].hero,
        title: data[index].name,
        description: data[index].summary,
        link: '#',
      });
    });
  return itemList;
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
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
