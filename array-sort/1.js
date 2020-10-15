function sortWords(words) {
    return words.sort();
  }
  
  function sortNumbers(numbers) {
    return numbers.sort((first, second) => {
      if(first < second) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  
  function largestFirst(numbers) {
    return numbers.sort((first, second) => {
      if(first > second) {
        return -1;
      } else {
        return 1;
      }
    })
  }
  
  function sortFlowersByZone(flowers) {
    return flowers.sort((first, second) => {
      console.log(first, ",", second);
      if(first.zone < second.zone) {
        return -1;
      }
      if(second.zone < first.zone) {
        return 1;
      }
      return 0;
    });
  }
  
  function sortByLength(strings) {
    return strings.sort((first, second) => {
      console.log(first.length, second.length);
      if(first.length < second.length) {
        return -1;
      }
      if(second.length < first.length) {
        return 1;
      }
      return 0;
    });
  }