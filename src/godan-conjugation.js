const { changeVowel } = require("./kana-utils")

const godanToPast = (verb) => {
  const root = verb.slice(0, -1)
  const last = verb.slice(-1)
  switch (last) {
    case "う":
    case "る":
    case "つ":
      return root + "った"
    case "ぬ":
    case "む":
    case "ぶ":
      return root + "んだ"
    case "く":
      return root + "いた"
    case "ぐ":
      return root + "いだ"
    case "す":
      return root + "した"
  }
}

const godanToNegative = (verb) => {
  const root = verb.slice(0, -1)
  const last = verb.slice(-1)

  if (last === "う") {
    return root + "わない"
  }
  return root + changeVowel(last, "あ") + "ない"
}

module.exports = { godanToPast, godanToNegative }