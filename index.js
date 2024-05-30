const express= require("express");
const users= require("./Mock_DATA.json");

const app=express();
const PORT=8000;

// Routes
// /api means json data throw karega warna html data
app.get("/api/users",(req,res)=>{
return res.json(users);
});

// merge /Grouping all three with same id ,isse ham bas id change karenge aur sab 
// aur sabme change ho jaaega
app
.route('/api/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    // edit user with id
    return res.json({status:"Pending"});
})
.delete((req,res)=>{
    // delete user with id
    return res.json({status:"Pending"});
});

// app.get("/api/users/:id",(req,res)=>{
// const id=Number(req.params.id);
// const user=users.find((user)=>user.id===id);
// return res.json(user);
// });

// post k lie ek alag route hai

app.post('/api/users',(req,res)=>{
// TODO:create new user
return res.json({status:"pending"});
});

// app.patch('/api/users/:id',(req,res)=>{
//     // TODO:Edit the user with id
//     return res.json({status:"pending"});
//     });

// app.delete('/api/users/:id',(req,res)=>{
//     // TODO:delete the user with id
//      return res.json({status:"pending"});
//  });


app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`));