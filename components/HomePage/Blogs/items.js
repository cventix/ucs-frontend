export const items = (data) => {
  const itemList = [];
  data &&
    Object.keys(data).forEach((index) => {
      itemList.push({
        id: data[index]._id,
        img: data[index].hero,
        title: data[index].name,
        description: data[index].author,
        link: '#',
      });
    });
  return itemList;

  // return [
  //   {
  //     id: 1,
  //     src: '/images/blog-slider1.png',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 2,
  //     src: '/images/blog-slider2.jpeg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 3,
  //     src: '/images/blog-slider3.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 4,
  //     src: '/images/blog-slider4.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 5,
  //     src: '/images/blog-slider5.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 6,
  //     src: '/images/blog-slider6.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 7,
  //     src: '/images/blog-slider7.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  //   {
  //     id: 8,
  //     src: '/images/blog-slider8.jpg',
  //     title: 'Podcast - Louis Gave',
  //     description: 'August 5 - Clay Shirky: New York University',
  //     link: '#',
  //   },
  // ];
};

export const settings = {
  dots: true,
  infinite: true,
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
