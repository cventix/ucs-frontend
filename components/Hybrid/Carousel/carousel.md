# carousel

carousel is a image slide that you can control this with click or scroll

## Props

| name           | default | type     | description       |
| -------------- | ------- | -------- | ----------------- |
| title          | ""      | {string} | title of carousel |
| titleClassName | ""      | {string} | className titles  |

settings:

| name           | default | type     | description                                 |
| -------------- | ------- | -------- | ------------------------------------------- |
| dots           | false   | {bool}   | dots button                                 |
| infinite       | false   | {bool}   | attaching the first slide to the last slide |
| speed          | 500     | {number} | speed of move carousel                      |
| slidesToShow   | 1       | {number} | count of slides to show                     |
| slidesToScroll | 1       | {number} | count of move slides when scrolling         |

## Example

```javascript
/** request to server and get data */
import Carousel from '../components/Carousel';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

<Carousel settings={settings} title="" titleClassName="">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Carousel>;
```
