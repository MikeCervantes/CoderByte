function SimpleAdding(num) { 
    if (num === 1) {
      return 1;
    }
    else {
      return num + SimpleAdding(num -1);
    }
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  SimpleAdding(readline());