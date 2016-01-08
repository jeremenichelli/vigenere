# vigenere

JavaScript library to cipher and decipher strings using Vigènere encrypting method writeen in ES2015.

## Use

As you might, or might not know, the Vigènere encryption receives a key word that will use in the arithmetical process of encryption and the phrase you want to cipher or decipher.

To use it in your app, download the distribution file and import the module:

```js
import { cipher, decipher } from 'vigenere.js';
```

### cipher

```js
cipher('lemon', 'Attack at dawn!');
// returns 'Lxfopv ef rnhr!'
```

### decipher

```js
decipher('lemon', 'Lxfopv ef rnhr!');
// returns 'Attack at dawn!'
```

## Reference

<a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher</a>