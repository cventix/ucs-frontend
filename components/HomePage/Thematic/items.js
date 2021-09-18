export const items = [
  {
    id: 1,
    src: '/images/thematic-slider1.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 2,
    src: '/images/thematic-slider2.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 3,
    src: '/images/thematic-slider3.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 4,
    src: '/images/thematic-slider4.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 5,
    src: '/images/thematic-slider5.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
  {
    id: 6,
    src: '/images/thematic-slider3.jpg',
    title: 'Podcast - Louis Gave',
    description: 'August 5 - Clay Shirky: New York University',
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
