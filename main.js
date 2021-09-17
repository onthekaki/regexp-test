const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumped over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g) //골뱅이 앞에 백슬래시 붙여도 되고 안 붙여도 되고
)
