const kanaMap = require("./kana-map")

const consonants = "kgsztdcnhfbpvmyrwl"
const vowels = "aiueo"

const toKana = (romaji) => {
  let splitRomaji = []
  let currentKana = ""

  for (let i = 0; i < romaji.length; i++) {
    // check for "nn", "n'", and "n "
    if (currentKana === "n") {
      if (romaji[i] === "n" || romaji[i] === "'" || romaji[i] === " ") {
        splitRomaji.push(currentKana)
        currentKana = ""
        // "n" will also pass the consonant test, so it must be skipped
        continue
      }
    }
    if (consonants.includes(romaji[i])) {
      if (currentKana == romaji[i]) {
        splitRomaji.push("ltu") // check for っ
        currentKana = ""
      }
      // consonants always have a vowel after them, so don't push to the list yet
      currentKana += romaji[i]
    } else {
      currentKana += romaji[i]
      splitRomaji.push(currentKana)
      currentKana = ""
    }
  }

  // pushes an empty string to the end unless you are halfway through writing a kana
  // (i.e., you have typed a consonant without a vowel)
  splitRomaji.push(currentKana)

  return splitRomaji.map(c => kanaMap[c] ? kanaMap[c] : c).join("")
}

module.exports = toKana