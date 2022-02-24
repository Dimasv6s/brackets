module.exports = function check(str, bracketsConfig) {
  const bracket = []
  const closeBrackets = [].concat(...bracketsConfig).filter((_, i) => (i % 2))
  const openBrackets = [].concat(...bracketsConfig).filter((_, i) => !(i % 2))
  for (let i = 0; i < str.length; i++) {
    if(openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
      if (bracket[bracket.length - 1] === str[i]) {
        bracket.pop()
        continue
      }
      bracket.push(str[i])
      continue
    }
    if (openBrackets.includes(str[i])) {
      bracket.push(str[i])
      continue
    }
    if(str[i] === closeBrackets[openBrackets.indexOf(bracket[bracket.length - 1])]) {
      bracket.pop()
    } else { return false
    }
  }
  return bracket.length ? false : true 
}