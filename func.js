var calculateMyage = function (birthYaer) {
    return new Date(Date.now()).getFullYear() - birthYaer;
};
var myAge = calculateMyage(1997);
console.log(myAge);
//use func info
function greetMe(userInfo) {
    return (userInfo.name + "It's nice to know that you are " + userInfo.age + " years old.");
}
console.log(greetMe({ name: "Phuchit ", age: myAge }));
