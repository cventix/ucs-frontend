export const items = [
  {
    id: 1,
    src: '/images/editores-slider1.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 2,
    src: '/images/editores-slider2.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 3,
    src: '/images/editores-slider3.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 4,
    src: '/images/editores-slider4.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 5,
    src: '/images/editores-slider5.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 6,
    src: '/images/editores-slider6.webp',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
];

export const settings = {
  dots: true,
  infinite: true,
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
