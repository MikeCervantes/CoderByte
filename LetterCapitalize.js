function LetterCapitalize(str) { 

    wordarr = str.split(" ");
    
    for (var i = 0, n = wordarr.length; i < n; i++) {
     wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1); 
    }
    str = wordarr.join(" ");
    
    return str; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  LetterCapitalize(readline());