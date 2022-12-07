//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82"
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.png";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15-10;
//var mul = 10*3;
//var div = 10/3
//var mod = 10%3;
//
//var msg="10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * 5 + 3 - 4;
//var result = 10 * ((5+3)-4);
//console.log(result);

//var balances = [50.45, 4000.12, -300.50];
//
//var studentNames = ["Timmy", "Janessa", "Arun"];
//
//var naughtyList = [];
//naughtylist.push(studentNames[0]);
//
//var index = naughtyList.indexOf("Timmy");
//
//console.log(naughtyList);
//if (index > -1) {
//    naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;

//== equal to
// === ??
// <= less than or equal to
// >= greater than or equal to
// !==

//var val1 = 23;
//var val2 = "23";
//
//if (val1 !== val2) console.log("These are not the same");
//else console.log("One of these is like the other...");


//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if(nikeSBShoes - coupon <= myAccountBalance){
//    console.log("We just bought some dope shoes with a coupon!");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account Balance: " + myAccountBalance)
//}
//    else {
//    console.log("You too broke fo shoes bra!");
//}

//if (1 === 1 && 2 === 2 || "joe" === "joe") {
//    console.log("These are both true!");
//}
//
//if (true && true) {
//    console.log("These are the same!")
//}
//
//if (1 === 3 || "joe" === "joe") {
//    console.log("One of these are true");
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3disabledHandicap = false;
//
//if (cat1 > cat2 && cat1 > cat3 && !cat3disabledHandicap) {
//    console.log("Cat 1 is the cutest!");
//} else if (cat2 > cat1 && cat2 > cat3 && !cat3disabledHandicap) {
//    console.log("Cat 2 is the cutest!");
//} else if (cat3 > cat1 && cat3 > cat2 || cat3disabledHandicap) {
//    console.log("Cat 3 is the cutest!");
//}

var student1 = "Timmy";
var student2 = "Janessa";
var student3 = "Arun";

var students = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];

naughtyList.push(students[0]);

var index = naughtyList.indexOf("Timmy");
console.log(naughtyList)

if (index > -1) {
    naughtyList.splice(index, 1);
}

console.log(naughtyList);