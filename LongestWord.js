function LongestWord(sen) {
  
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Zsd]/g, '');
  
  var arr = sen.split(' ');
  
  arr.sort(function(a, b) {return b.length - a.length});
  
  return arr.shift();

  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());