# katsuyō
This is a Japanese text transformation utility to handle inflections/conjugations and alphabet/kana conversions.

## NPM
```
λ npm install katsuyo --save
```

## Usage
```JavaScript
const Katsuyo = require("katsuyo")

console.log(Katsuyo.toKana("ohayougozaimasu!")
// "おはようございます！"
```

## Features
- ~Romaji to Hiragana~ Katsuyo.toKana(romaji)
- Hiragana to Romaji
- Hiragana to Katakana
- Katakana to Hiragana
