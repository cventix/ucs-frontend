# Button

## Props

| name        | default | type     | description         |
| ----------- | ------- | -------- | ------------------- |
| type        |         | {string} | type of button      |
| className   |         | {string} | className of button |
| innerText   |         | {string} | text of button      |
| handleClick |         | {func}   | onClick handler     |

## Example

```javascript
import Button from '../components/Infrastructure/Button';

<Button type="submit" className="" handleClick={() => {}}>
  Ok
</Button>;
```
