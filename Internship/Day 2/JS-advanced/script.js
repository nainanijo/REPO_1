console.log("hello world!")

// check if the number is odd or even
let a=2890

if (a%2=== 0) {
    console.log(`The number ${a} is even`)
}
else {
    console.log(`the number ${a} is odd `)
}

// Reference types
// Objects
let student ={
    name:"Vivien",
    age:25,
    hobby:"music"
}
console.log(student)
console.log(student.name)
console.log(student.age)

//Functions
function add(a,b){
    c=a+b
    console.log(`Sum of ${a} and ${b} is ${c}`)
}
add(5,6)

function check_even(b){
    if (b%2===0){
        console.log(`${b} is an even number!`)
    }
    else{
        console.log(`${b} is an odd number!`)
    }
}

check_even(25)
check_even(43508)

//(S)
function greet(time){
if (time < 12){
    console.log(`Good Morning!`)
}
else if (time >= 12 && time < 15){
    console.log(`Good Afternoon!`)
}
else if (time >= 15 && time < 20){
    console.log(`Good Evening!`)
}
else{
    console.log(`Good Night!`)
}

}
greet(23)


const greet_2=()=>{
    alert("Goodmorning!")
}
console.log(greet_2)

const subtract =(a,b)=>{
    return a-b
}
console.log(subtract(10,5))


//Arrays
let seasons=["winter","summer","rainy"]
console.log(seasons)
console.log(seasons[2])
console.log(seasons[3])

//To print all elements in an array 
function array_print(a){
    for (i in a){
        console.log(a[i])
    }
}

array_print(["winter","Summer","Autumn","Spring","Monsoon",]);
// OR

for(let i=0;i<seasons.length;i++){
        console.log(seasons[i])
    }


//Map fn

const d=[1,2,4,16];
// map fn to create a new array with elements doubled
const b =d.map(x=>x*2);
console.log(b);




    
