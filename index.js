const express = require("express")
const fs = require("fs");

const app = express();
app.use(express.json())

app.get("/create",(req,res)=>{
    let date = new Date();
    fulldate =(date.getDate()+"-"+date.getMonth()+1+"-"+date.getFullYear()+"  "+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds())
    fs.writeFile(`./files/${fulldate}.txt`,fulldate,(err)=>{
        if (err) throw err;
        console.log('The file has been saved!');
    })
    res.send("file created")

})

app.get("/read",(req,res)=>{
    fs.readdir("./files",(err,data)=>{
        if(err) throw err;
        data.map((obj)=>{
            console.log(obj)
        })
    })
          
    res.send("data added")
})

app.listen(3000)