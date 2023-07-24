
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const path= require('path');
const { route } = require('routes/list');
const cors=require("cors");
app.use(cors());

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "NAImur-1411402127",
    database : "to_do_list"
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get("/api/get",(req,res)=>{
    const sqlGet = "SELECT * FROM tasks_list";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.get('/about',(req,res)=>{

    const sqlInsert = "INSERT INTO tasks_list(task_descrip) VALUES ('Frist Task')";
    db.query(sqlInsert,(err,result)=>{
        if(err != null)
        {
            console.log("There are error"+err);
        }
        else
        {
            console.log("result"+res);
        }
    })
    res.send("Hellow World");
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

