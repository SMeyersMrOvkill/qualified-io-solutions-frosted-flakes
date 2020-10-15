function addOne(number) {
    return number + 1
  }
  function isThisAddOne(arg) {
    return arg === addOne;
  }
  function addOneToEach(numbers) {
    return numbers.map(addOne);
  }
  function logEachMessage(strings) {
    strings.forEach(console.log);
  }
  function callEachFunction(funcs) {
    for(let fun of funcs) {
      fun();
    }
  }