let variable = 'hello'
variable = "dddd"
let age = 18

//create our own type
let ageWithType:number=18;



///create our own type 
let teststrinng:string
teststrinng = "dddd"

//using multiple types
let teststringorNumber : string | number
teststringorNumber = "ffff"

//Array 
let names = ['john' , 'james' , 'petter']
names.push('ree')

//Array types
let testStringArray :string[]
testStringArray = ["ffff",]
 
//multiple arraytype
let testStringorNumberArray :(string| number)[]
testStringorNumberArray = [1, "dddd"]

//OBJECTS
let user ={
    username :"johm",
    age:22,
    isAdmin:false
}
user.username = "joe"
user.age = 29
user.isAdmin = true
// user.phone = "+1234569"

let userObj :{
    username:string,
    age:number,
    isAdmin:boolean
};

userObj ={
    username:"john",
    age:23,
    isAdmin:true,
    // phone:"+12355"
}
let userObj2 :{
    username:string,
    age:number,
    isAdmin:boolean
    phone?:string
};

userObj2 ={
    username:"john",
    age:23,
    isAdmin:true,
    phone:"+12355"
}



//ANY
let testAny;
testAny = 12
testAny = "kkk"
testAny = {}



//to give any incase you arent sure of the types


let testAnyArray : any[]
testAnyArray = [1,'two', false , []];


//FUNCTIONS


let sayHi =()=>{
    console.log("HI" , "welcome")
}

let funcReturnString = ():string=>{
    console.log("hi")
    return ("hiiii")
}

let multiple = (num:number) :number =>{
    return num*2
}
let sum = (num1:number , num2:number , another?:number) =>{   ///creating a function to Add numbers , we use another incase there isnt any
    return num1 + num2;
};
sum(2,3)


let func = (user:{username:string , age:number , phone?:string}) => {
    console.log(user.username),
}





//TYPES ALIASES

type UserType = {
    username:string;
    age:number;
    phone?:string
}

let betterFunc =(user:UserType) =>{
    console.log(user.username)
}



type myFunc = (a:number , b:string)=>void

let write:myFunc=(num , str) =>{
    console.log(num + " times " + str)
}

type UserType2 ={
    username:string;
    age:number;
    phone?:string;
    theme:"dark"  | "light"
}

const userWithTheme :UserType2 ={
    username:"James",
    age:23,
    theme:"dark",
    // theme:"pink"
}




//INTERFACES

interface IUser {
    username:string;
    age:number;
    email:string;
}

interface IEmployee extends IUser {
    employeeId:number
}

const emp:IEmployee ={
    username:"tom",
    email:"t@gmail.com",
    age:43,
    employeeId:1
};

const client:IUser ={
    username:"tom",
    email:"t@gmail.com",
    age:43,
};



///GENERICS


interface IAuthor {
    id:number,
    username:string
}


interface ICategory {
    id:number,
    title:string
}


interface IPost {
    id:number;
    title:string;
    desc:string;
    extra: IAuthor [] | ICategory[];
}

interface IPostBetter <T>{
    id:number;
    title:string;
    desc:string;
    extra:T[]
}


const testMe:IPostBetter <string> = {
    id:1,
    title:"Post title",
    desc:"post Desc",
    extra:["str" , "str2"],
}


interface IPostEvenBetter <T extends object> {
    id:number;
    title:string;
    desc:string;
    extra:T[];
    
}


const testMe2:IPostEvenBetter <{id:number , username:string}> = {
    id:1,
    title:"Post title",
    desc:"post Desc",
    extra:[{id:1 , username:'john'}],
}


const testMe3:IPostEvenBetter <IAuthor> = {
    id:1,
    title:"Post title",
    desc:"post Desc",
    extra:[{id:1 , username:'john' }],
}

