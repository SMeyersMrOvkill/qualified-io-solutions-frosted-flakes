function addArguments(a, b) {
    return a + b
  }
  
  let add = addArguments;
  
  let listOfFunctions = [add];
  
  let operators = {
    "+": add
  }
  
  function run() {
  // Add your solution code here
    addArguments(32, 143);
    add(31, 144);
    listOfFunctions[0](6, 12);
    operators['+'](3, 18)
  }