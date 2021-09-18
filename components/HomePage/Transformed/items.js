export const items = [
  {
    id: 1,
    src: '/images/transformed-slider1.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 2,
    src: '/images/transformed-slider2.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 3,
    src: '/images/transformed-slider3.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 4,
    src: '/images/transformed-slider4.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 5,
    src: '/images/transformed-slider5.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
];

export const settings = {
  dots: false,
  infinite: false,
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
