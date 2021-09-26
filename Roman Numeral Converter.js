/*
    Convert the given number into a roman numeral.

    All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let romanData = {
        1:"I",
        2:"II",
        3:"III",
        4:"IV",
        5:"V",
        6:"VI",
        7:"VII",
        8:"VIII",
        9:"IX",
        10:"X",
        20:"XX",
        30:"XXX",
        40:"XL",
        50:"L",
        60:"LX",
        70:"LXX",
        80:"LXXX",
        90:"XC",
        100:"C",
        200:"CC",
        300:"CCC",
        400:"CD",
        500:"D",
        600:"DC",
        700:"DCC",
        800:"DCCC",
        900:"CM",
        1000:"M",
        2000:"MM",
        3000:"MMM",
    };

    let roman = "";
    let init;
    let strNum = num.toString(); // copy value of num in strNum(in string formate)
    
    // This func helps in finding place. Here 'inp' means index of 'num'
    //(for num=36, if inp=0 then return 10 because the pace of 3(i.e., 0th index of 36) is 10)
    let findPlace = (inp)=>{
        let place = "1";
        for(let i=0; i<((strNum.length - inp) - 1); i++){
            place += "0";
        };

        return parseInt(place);
    };


    for(let i=0; i<strNum.length; i++)
    {
        init = parseInt(strNum[i]) * findPlace(i);
        if(init != 0){
            roman += romanData[init];
        };
    };

    return roman;
};
   
console.log(convertToRoman(29));
console.log(convertToRoman(3999));
console.log(convertToRoman(400));


