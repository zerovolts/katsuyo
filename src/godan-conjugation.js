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

module.exports = { godanToPast }