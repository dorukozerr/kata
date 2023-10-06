function findLongestWordWithMaxVowels(sentence) {
  const words = sentence.split(/\s+/) // Split the sentence into words
  let longestWord = ''
  let maxVowelCount = 0

  console.log(words)

  for (const word of words) {
    // Remove non-alphabet characters and convert to lowercase
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()

    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord
      maxVowelCount = countVowels(cleanedWord)
    } else if (cleanedWord.length === longestWord.length) {
      const vowelCount = countVowels(cleanedWord)
      if (vowelCount > maxVowelCount) {
        longestWord = cleanedWord
        maxVowelCount = vowelCount
      }
    }
  }

  return longestWord
}

function countVowels(word) {
  const vowels = 'aeiouAEIOU'
  let count = 0
  for (const char of word) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count
}

const sentence =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'
const longestWord = findLongestWordWithMaxVowels(sentence)
console.log(longestWord)
