console.log("Hello Universe")
document.write("howdy doo")
//variable declaration
/* Multi 
    Line Comment */
let name1="Naina"
console.log(name1)

let salary=30000000
console.log(salary)
console.log(typeof(salary))
console.log(typeof(name1))

let isValid // declaration
isValid=true //assignment

isValid=false
console.log(isValid)

//let isValid=true
//console.log(isValid)

//const pi=3.14
//console.log(pi)
pi=3.1412

console.log(200+100)
console.log(200-100)
console.log(200/100)
console.log(pi**2)
console.log(10%3)

let a=150
let b=45
let c= a*b
console.log(`Product of ${a} and ${b} is ${c}`) // `-> tilda symbol
c=a++ //postfix increment
console.log(c)
console.log(a)

d=++a //prefix increment
console.log(d)
console.log(a)

let x=5
x+=5 //x=x+5
console.log(x)

//Comparison Operators
let flag1= true
let flag2= true

console.log(flag1==flag2) //value comparison
console.log(flag1===flag2) //value and data comparison

//Logical Operators
console.log((flag1 != flag2) || (2<3)) //OR
console.log((flag1 != flag2) && (2<3)) //AND


let time = new Date().getHours()
console.log(time)

if (time < 12){
    console.log(`Goodmorning!`)}
else if (12<time<15){
    console.log(`Good Afternoon!`)
}
else if (16<time<20){
    console.log(`Goodevening!`)
}
else{
    console.log(`Goodnight!`)
}

for (let i = 1; i <=50; i++) {
    console.log(i);
}

