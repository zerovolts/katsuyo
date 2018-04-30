const ichidanToPast = (verb) => {
  const root = verb.slice(0, -1)
  return root + "た"
}

const ichidanToNegative = (verb) => {
  const root = verb.slice(0, -1)
  return root + "ない"
}

module.exports = { ichidanToPast, ichidanToNegative }