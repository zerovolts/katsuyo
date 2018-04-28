const Katsuyo = require("./index")

class Tester {
  constructor() {
    this.tests = []
  }

  create(name, test) {
    this.tests.push({name, test})
  }

  testAll() {
    this.tests.forEach(test => {
      try {
        test.test()
      } catch (err) {
        console.log(`test failed: ${test.name}`)
        //console.log(`expected: ${err.expected}`)
        //console.log(`actual: ${err.actual}`)
      }
    })
  }
}

const tester = new Tester()

tester.create("handles ん correctly", () => {
  console.assert(Katsuyo.toKana("ona") === "おな")
  console.assert(Katsuyo.toKana("onna") === "おんあ")
  console.assert(Katsuyo.toKana("onnna") === "おんな")
  console.assert(Katsuyo.toKana("on'a") === "おんあ")
  console.assert(Katsuyo.toKana("on'na") === "おんな")
  console.assert(Katsuyo.toKana("on a") === "おんあ")
})

tester.create("handles っ correctly", () => {
  console.assert(Katsuyo.toKana("ltu") === "っ")
  console.assert(Katsuyo.toKana("zakku") === "ざっく")
  console.assert(Katsuyo.toKana("tte") === "って")
})

tester.testAll()