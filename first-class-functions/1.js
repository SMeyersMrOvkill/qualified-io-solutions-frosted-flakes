function addArguments(a, b) {
    return a + b
  }
  
  let add = addArguments;
  
  let listOfFunctions = [add];
  
  let operators = {
    "+": add
  }