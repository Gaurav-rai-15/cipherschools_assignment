function isPalindrome(str) {
    const chars = str.split('');
  
    const reversedChars = chars.reverse();
  
    return str === reversedChars.join('');
  }
  
  const str = 'racecar';
  console.log(isPalindrome(str));
  