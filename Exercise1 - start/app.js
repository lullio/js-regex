/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];

let regex1 = new RegExp("^801-\\d{3}-\\d{4}$", "g");

console.log(regex1.test("801-766-9754"));

// SOLUÇÃO 1 - FILTER METHOD ARRAY
console.log(phoneNums.filter(val => regex1.test(val)));


// SOLUÇÃO 2 - LOOP
let arr = [];
for(let i =0; i<phoneNums.length; i++){
    if(regex1.test(phoneNums[i])){
        arr.push(phoneNums[i]);
    }
}
console.log(arr);