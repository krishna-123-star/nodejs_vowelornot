const isVowelOrConsonant = (str, index) => {
    const char = str.charAt(index);
    const vowels = 'aeiou';
    if (vowels.includes(char)) {
      return 'Vowel';
    } else if (char >= 'a' && char <= 'z') {
      return 'Consonant';
    } else {
      return 'Invalid input';
    }
  };
  
  const inputString = "Hello, World!";
  const index = 1;
  
  console.log(`The character at index ${index} in "${inputString}" is: ${isVowelOrConsonant(inputString, index)}`);
  