export function slugger(...words) {
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase()+words[i].substr(1)
    }
    const newWord = "".concat(words).replaceAll(",", "-")
    return newWord
  }