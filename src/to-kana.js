const kanaMap = require("./kana-map")

const consonants = "kgsztdcnhfbpmyrw"
const vowels = "aiueo"

const toKana = (romaji) => {
  let splitRomaji = []
  let currentKana = ""

  for (let i = 0; i < romaji.length; i++) {
    if (consonants.includes(romaji[i])) {
      currentKana += romaji[i]
      if (currentKana == "n") {
        splitRomaji.push(currentKana)
        currentKana = "" 
      }
    } else {
      currentKana += romaji[i]
      splitRomaji.push(currentKana)
      currentKana = ""
    }
  }
  splitRomaji.push(currentKana)
  return splitRomaji.map(c => kanaMap[c] ? kanaMap[c] : c).join("")
}

module.exports = toKana