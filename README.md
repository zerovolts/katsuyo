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
`toKana(romaji)`
- Given a string of Roman characters (rōmaji), returns the same string in Hiragana.

`isHiragana(kana)`
- returns `true` if the character given is Hiragana. Checks only the first character if given a multi-character string.

`isKatakana(kana)`
- returns `true` if the character given is Katakana. Checks only the first character if given a multi-character string.

`kanaPercentages(text)`
- returns a Hash of percentages of Hiragana, Katakana, and other characters in a given string.