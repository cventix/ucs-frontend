# carousel

carousel is a image slide that you can control this with click or scroll

## Props

items:

| name        | default | type     | description          |
| ----------- | ------- | -------- | -------------------- |
| id          |         | {number} | key of slide         |
| imgUrl      |         | {string} | path of image        |
| href        |         | {string} | link to another page |
| titleItem   |         | {string} | title of slide       |
| description |         | {string} | description of slide |

settings:

| name           | default | type     | description                                 |
| -------------- | ------- | -------- | ------------------------------------------- |
| dots           | false   | {bool}   | dots button                                 |
| infinite       |         | {bool}   | attaching the first slide to the last slide |
| arrows         |         | {bool}   | arrow buttons (next or prev slide)          |
| speed          |         | {number} | speed of move carousel                      |
| slidesToShow   |         | {number} | count of slides to show                     |
| slidesToScroll |         | {number} | count of move slides when scrolling         |

## Example

```javascript
/** request to server and get data */
import Carousel from '../components/Carousel';
const items=[
    {
      id: 1,
      imgUrl: 'images/slide1.jpg',
      href: '',
      titleItem: 'The future of assign assets management',
      description:
        'this is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this item',
    },
    {
      id: 2,
      imgUrl: 'images/slide2.jpg',
      href: '',
      titleItem: 'The Chinese e-commerce bela bela bela',
      description:
        'this is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this item',
    },
    {
      id: 3,
      imgUrl: 'images/slide3.jpg',
      href: '',
      titleItem: 'Infrastructure - What China can teach the US',
      description:
        'this is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this item',
    },
    {
      id: 4,
      imgUrl: 'images/slide4.jpg',
      href: '',
      titleItem: 'Trends in ED tech',
      description:
        'this is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this item',
    },
    {
      id: 5,
      imgUrl: 'images/slide5.jpeg',
      href: '',
      titleItem: 'Alternative data in China',
      description: 'this is a test description for this item',
    },
    {
      id: 6,
      imgUrl: 'images/slide2.jpg',
      href: '',
      titleItem: 'Trends in ED tech',
      description:
        'this is a test description for this itemthis is a test description for this itemthis is a test description for this itemthis is a test description for this item',
    },
];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

<Carousel items={items} settings={settings}>
```
