import jwt from "jsonwebtoken"
const JWT_SECRET = "VeryHardToGuesshahahaha";
let users = []; // in memory space
/*
{
    username,
    password,
    todos:[
        {
            id:
            task:
    }
]
}
*/


export function auth(req,res,next){
    const token = req.headers.token;

    if (token) {
      const token = req.headers.token;
      const decodedData = jwt.verify(token, JWT_SECRET);
      if (decodedData.username) {
        req.user = users.find((u) => u.username === decodedData.username);
        next();
      } else {
        res.json({
          Error: "Invalid Token",
        });
        return;
      }
    } else {
      res.json({
        Error: "Please Login Before Moving further",
      });
      return;
    }
} 
export async function signup(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find((u) => u.username === username);

  if (!foundUser) {
    users.push({
      username: username,
      password: password,
      todos: [],
    });
    res.json({
      Message: "Registration Successfull.",
      User: users

    });
  } else {
    res.json({
      Error: "User already exists !",
    });
    return;
  }
}
export async function signin(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find((u) => u.username === username && u.password === password);

  if (!foundUser) {
    res.json({
      Error: "User not found !",
    });
    return;
  } else {
    const token = jwt.sign({
        username:username
    }, JWT_SECRET);
    res.setHeader(
        "token",token
    ).json({
        token:`${token}`
    })    
}
}

export async function getAllTodo(req, res, next) {
  //  write here
  const user = req.user;
  console.log(user)
  const foundUser = users.find(u => u.username == user.username);
  if (!foundUser){
    res.json({
        Error:`User found is ${foundUser}` 
    });
    return;
  }
  res.json({
    "All Tasks": foundUser.todos,
  });
}

export async function createTodo(req, res, next) {
  //  write here
  const task = req.body.task;
  const user = req.user;
  
  const foundUser = users.find((u) => u.username == user.username);
  foundUser.todos.push({
    id: foundUser.todos.length + 1,
    task: task
  });

  res.json({
    msg:`Task ${task} added Successfully`
  })

}

export async function updateTodo(req, res, next) {
    //  write here
    const id = req.params.id;
    const new_task = req.body.task;
    const user = req.user;

    const foundUser = users.find( u => u.username == user.username)

    const foundtask = foundUser.todos.find(u => u.id == id)
    if(foundtask){
        foundtask.task = new_task
        res.json({
          Messgae: `Task updated.`,
        });
    }else{
        res.json({
          error: `No todo found with ID ${id}`,
        });
        return;
    }
}
export async function searchTodo(req, res, next) {
  //  write here
  const id = req.body.id;
  const user = req.user;
  const foundUser = users.find((u) => u.username == user.username);
  const foundtask = foundUser.todos.find((u) => u.id == id);
  if(!foundtask){
    res.json({
        error:`No task found with ID ${id}`
    });
    return;
  }

  res.json({
    task:foundtask,
  });

}

export async function deleteTodo(req, res, next) {
  //  write here
  const user = req.user;
  const foundUser = users.find((u) => u.username == user.username);
  foundUser.todos = []

  res.json({
    msg:"All Todos Cleared"
  })
}

export async function deleteTodoById(req, res, next) {
  //  write here
  const id = req.params.id;
  const user = req.user;

  const foundUser = users.find((u) => u.username == user.username);
  const foundtask = foundUser.todos.findIndex((u) => u.id == id);
  if (!foundtask) {
    res.json({
      error: `No task found with id ${id}`,
    });
    return;
  }
  foundUser.todos.splice(foundtask, 1);
  res.json({ message: `Task with id ${id} deleted successfully.` });
}
