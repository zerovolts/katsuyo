# katsuyō
活用：katsuyō is a Japanese text transformation utility to handle inflections/conjugations and alphabet/kana conversions. There is significant work to be done, but it's in a usable state.

## NPM
```console
λ npm install katsuyo --save
```

## Testing with AVA 
```console
λ npm test 
```

## Usage
```js
import { toKana, inflect, WordTypes, InflectionTypes } from "katsuyo";

const { VERB_ICHIDAN } = WordTypes;
const { NEGATIVE, DESIRE } = InflectionTypes;

toKana("ohayougozaimasu!");
// "おはようございます！"

const word = {
  word: "見る",
  category: VERB_ICHIDAN,
  inflections: [NEGATIVE, DESIRE]
};

inflect(word);
// {word: "見たくない", category: "ADJECTIVE_KEYOUSHI", inflections: []}
```

## API
#### `toKana(romaji)`
Given a string of Roman characters (rōmaji), returns the same string in Hiragana.

#### `isHiragana(kana)`
Returns `true` if the character given is Hiragana. Checks only the first character if given a multi-character string.

#### `isKatakana(kana)`
Returns `true` if the character given is Katakana. Checks only the first character if given a multi-character string.

#### `kanaPercentages(text)`
Returns a Hash of percentages of Hiragana, Katakana, and other characters in a given string.

#### `changeVowel(kana, vowel)`
Returns a kana of the same group with the given vowel.

#### `inflect(wordObject)`
Takes a Japanese word with inflections and returns the transformed word.

- `wordObject` should be an object with the fields `word`, `category`, and `inflections`.
- `word`: A string containing the root word to be inflected (in Kana/Kanji).
- `category`: A part of speech classifier that matches the root word. This is necessary context for inflection. See `Katsuyo.WordTypes` for supported values.
- `inflections`: A stack (list) of inflections to apply to the root word, in reverse order (i.e. pop an inflection off the stack and apply it). See `Katsuyo.InflectionTypes` for supported values.