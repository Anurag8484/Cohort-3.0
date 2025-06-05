function greet(user){
    if (user.gender === 'Male') {
        console.log("Shri Harivansh Mr." + user.name + "----" + user.age);    
    }
    else if (user.gender === 'Female') {
        console.log("Shri Harivansh Mrs." + user.name + "----" + user.age);    
    }
    else {
        console.log("Shri Harivansh Others." + user.name + "----" + user.age);    

    }

    if (user.age > 18){
        console.log("You can Indeed Vote")
    }
    else {
        console.log("Just wait for " + (18-user.age) + " more Year/Years, then you can vote"  )
    }   
    
}


const users = [
    {
        name: "Anurag",
    age: 14,
    gender: "Male",
  },
  {
      name: "Ashisha",
      age: 19,
      gender: "Female",
    },
    { name: "Vinay",
        age: 24,
        gender: "Male" },
    ];
    const newarray = users.filter(user => user.age > 18 && user.gender === 'Male').map(user=>user.name)
    console.log(newarray)
    // console.log(18-user.age)
// greet(user)
// console.log(sum(4))

// console.log(parseInt(18.9))