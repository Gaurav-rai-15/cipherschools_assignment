function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  const str = "Hello, World!";
  const numVowels = countVowels(str);
  
  console.log(`${numVowels}`);
  