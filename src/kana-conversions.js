const isHiragana = (kana) => {
  const firstCodePoint = 12352
  const lastCodePoint = 12447
  const codePoint = kana.codePointAt(0)
  return (codePoint >= firstCodePoint && codePoint <= lastCodePoint )
}

// offset +96
const isKatakana = (kana) => {
  const firstCodePoint = 12448
  const lastCodePoint = 12543
  const codePoint = kana.codePointAt(0)
  return (codePoint >= firstCodePoint && codePoint <= lastCodePoint )
}

// returns {hiragana: 78.2, katakana: 13.5, other: 8.3}
const kanaPercentages = (text) => {
  const total = text.length
  const counts = {
    hiragana: 0,
    katakana: 0,
    other: 0
  }

  text.split("").forEach(kana => {
    if (isHiragana(kana)) {
      counts.hiragana += 1
    } else if (isKatakana(kana)) {
      counts.katakana += 1
    } else {
      counts.other += 1
    }
  })

  return {
    hiragana: (counts.hiragana / total) * 100,
    katakana: (counts.katakana / total) * 100,
    other: (counts.other / total) * 100
  }
}

const groups = [
  "あいうえお",
  "かきくけこ",
  "さしすせそ",
  "たちつてと",
  "なにぬねの",
  "はひふへほ",
  "まみむめも",
  "らりるれろ" //TODO: やわ
]

const changeVowel = (kana, vowel) => {
  const vowelIndex = "aiueoあいうえお".indexOf(vowel) % 5
  const kanaGroup = groups.filter(group => group.includes(kana))[0]
  return kanaGroup[vowelIndex]
}

module.exports = {
  isHiragana,
  isKatakana,
  kanaPercentages,
  changeVowel
}