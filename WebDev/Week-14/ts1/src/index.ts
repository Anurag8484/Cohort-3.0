





interface Usertype{
    firstName: string,
    lastName: string,
    age: number
}




function greet(user:Usertype){

    console.log(`hello ${user.firstName} I think you are just ${user.age} years old ok got it`);
    return "hahah"
    
}


let user: Usertype = {
    firstName:"Anurag",
    age:23,
    lastName: "poonia"
}


greet(user)

