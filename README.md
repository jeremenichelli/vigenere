# vigenere

JavaScript library to cipher and decipher strings using Vigènere encrypting method.

## Use

As you might, or might not know, the Vigènere encryption receives a key word that will use in the arithmetical process of encryption and the phrase you want to cipher or decipher.


### cipher

```js
vigenere.cipher('lemon', 'Attack at dawn!');
// result: 'Lxfopv ef rnhr!'
```


### decipher

```js
vigenere.decipher('lemon', 'Lxfopv ef rnhr!');
// result: 'Attack at dawn!'
```

## Reference

<a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher</a>