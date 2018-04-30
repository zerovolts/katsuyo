const ichidanToPast = (verb) => {
  const root = verb.slice(0, -1)
  return root + "た"
}

module.exports = { ichidanToPast }