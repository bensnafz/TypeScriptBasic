

const calculateMyage = (birthYaer: number): number => {
    return new Date(Date.now()).getFullYear() - birthYaer
};

const myAge: number = calculateMyage(1997);

console.log(myAge);

//use func info
function greetMe(userInfo: { name: string; age: number }):
    string {
    return (
        userInfo.name + "It's nice to know that you are " + userInfo.age + " years old."
    );
}

console.log(greetMe({ name: "Phuchit ", age: myAge }));