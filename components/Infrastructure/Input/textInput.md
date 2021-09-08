# TextInput

## Props

| name           | default | type     | description            |
| -------------- | ------- | -------- | ---------------------- |
| id             |         | {string} | -                      |
| value          |         | {string} | -                      |
| ref            |         | {func}   | -                      |
| onBlur         |         | {func}   | -                      |
| type           |         | {string} | -                      |
| name           |         | {string} | -                      |
| inputClassName |         | {string} | -                      |
| labelClassName |         | {string} | -                      |
| labelText      |         | {string} | text of label of input |
| hasExtraTag    |         | {bool}   | -                      |
| maxLength      |         | {number} | -                      |
| extraTag       |         | {node}   | -                      |

## Example

```javascript
import TextInput from '../components/Infrastructure/TextInput';

<TextInput
  type="password"
  id="password-2"
  inputClassName=""
  labelClassName=""
  labelText="password"
  hasExtraTag={true}
  extraTag={() => (
    <Link href="#">
      <a ms-forgot="true" className={''}>
        Forgot your password?
      </a>
    </Link>
  )}
  maxLength={256}
  name="password"
  isRequired={true}
/>;
```
