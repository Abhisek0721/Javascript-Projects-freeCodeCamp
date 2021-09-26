/*
    Return true if the passed string looks like a valid US phone number.

    The user may fill out the form field any way they choose as long
    as it has the format of a valid US number. 
    The following are examples of valid formats for US numbers 
    (refer to the tests below for other variants):
        555-555-5555
        (555)555-5555
        (555) 555-5555
        555 555 5555
        5555555555
        1 555 555 5555
        
    For this challenge you will be presented with a string such as 800-692-7753 
    or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
    based on any combination of the formats provided above. The area code is required.
    If the country code is provided, you must confirm that the country code is 1.
    Return true if the string is a valid US phone number; otherwise return false.
*/


function telephoneCheck(str) {
    let phNum = '';
    str = str.replace(/ +/g, "");

    if(str.indexOf("(") != -1){
        if(str[str.indexOf("(")+4] != ")"){
            return false;
        };
    };

    if(str.indexOf(")") != -1){
        if(str[str.indexOf(")") - 4] != "("){
            return false;
        };
    };

    for(let i=0; i<str.length; i++){
        
        if((/[a-z]|[A-Z]/).test(str[i])){
            return false;
        };
        
        if((/[0-9]/).test(parseInt(str[0])) == false & str[0] != "("){
            return false;
        };
        
        if(str[i] == ")" | str[i] == "(" | str[i] == "-"){
            
        }else if(typeof parseInt(str[i]) != "number"){
            return false;
        }
        else{
            phNum += parseInt(str[i]).toString();
        };
    };

    if(phNum.length>11){
        return false
    }else if(phNum.length == 10){
        return true;
    }else if(phNum.length == 11){
        if((/^1/).test(phNum)){
            return true;
        }else{
            return false;
        };
    }else{
        return false;
    };
};
  
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 (757) 622-7382"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("(555-555-5555)"));