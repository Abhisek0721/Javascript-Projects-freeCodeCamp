/*
    Return true if the given string is a palindrome. Otherwise, return false.

    A palindrome is a word or sentence that's spelled the same way both forward
    and backward, ignoring punctuation, case, and spacing.

    Note: You'll need to remove all non-alphanumeric characters 
    (punctuation, spaces and symbols) and turn everything into
    the same case (lower or upper case) in order to check for palindromes.

    We'll pass strings with varying formats,
    such as "racecar", "RaceCar", and "race CAR" among others.

    We'll also pass strings with special symbols, 
    such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/


function palindrome(str) {
    let arr1 = [];
    let arr2 = [];
    str = str.toLowerCase();
    let myRegex = /[a-z]|\d/;

    for(let i=0; i<str.length; i++){
        if(myRegex.test(str[i])){
            arr1.push(str[i]);
        };
    };

    for(let i=0; i<str.length; i++){
        if(myRegex.test(str[i])){
            arr2.unshift(str[i]);
        };
    };
    

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        };
    };

    return true;
  };


console.log(palindrome("Eye"));
console.log(palindrome("E ye"));
console.log(palindrome("abhi"));
console.log(palindrome("ey'e"));