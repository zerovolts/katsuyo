const InflectionTypes = {
  PAST: "PAST",
  NEGATIVE: "NEGATIVE",
  DESIRE: "DESIRE"
}

// {word: "見る", category: "VERB_ICHIDAN", inflections: ["DESIRE", "NEGATIVE", "PAST"]}
// {word: "見たい", category: "ADJECTIVE_KEYOUSHI", inflections: ["NEGATIVE", "PAST"]}
// {word: "見たくない", category: "ADJECTIVE_KEYOUSHI", inflections: ["PAST"]}
// {word: "見たくなかった", category: "VERB_PAST", inflections: []}

module.exports = InflectionTypes