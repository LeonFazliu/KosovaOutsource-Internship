//this file will be only for refreshing my javascript syntax

const name='Leon';
let age=20;
const hasHobbies=true;

/*function summarizeUser(userName,userAge,userHasHobby){
    return ('Name is '+ userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby)
}
*/

const summarizeUser = (userName,userAge,userHasHobby)=>{
    return ('Name is '+ userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby)
}


const add=(a,b)=>a+b

console.log(add(2,2));

console.log(summarizeUser(name, age, hasHobbies));

const person={
    name: 'Leon',
    age: 20,
    gender: 'Male',
    greet(){
        console.log("Hi, i am "+this.name)
    }
};

person.greet();

//Arrays

const Hobbies=['Sports','Videogames','Music']
Hobbies.push("Programming")

for(let hobby of Hobbies){
    
    console.log(hobby)
}

//Array copying
const coppiedArray = Hobbies.slice()
console.log("Here is the copied array: " + coppiedArray)

const toArray=(...args) => {
    return args;

}
console.log(toArray(1,2,3,4,5));


const copiedPerson={...person}
console.log(copiedPerson);


const printName=({name})=>{
    console.log(name);
}

printName(person);


//Async Codes


const fetchData = () =>{

    const promise= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Fetching Done!");

    },1500);

    });
    return promise;
};



setTimeout(() => {
    console.log('Timer is done!')
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    } )
},2000

);