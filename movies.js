const mysql=require("mysql");
const express=require("express");
const movies=express();

const connection=mysql.createConnection({
    
    host: 'localhost',
    user: 'Pratik',
    password: 'project',
    database: 'Classwork'

});

var Data=[];
connection.connect();

movies.get("/",function(request,response)
{   
    let query="select * from movies";
    connection.query(query,function(err,result)
    {
        console.log(query)
        if (err==null)
        {
            Data=result;
            response.contentType("application/json");
            response.send(JSON.stringify(Data));
        }
        else
        {
            response.contentType("application/json");
            response.send(err)
        }
    });
    
});




movies.post("/",function(request,response)
{  
    let movieid=request.body.movieid;
    let moviename=request.body.moviename;
    let director =request.body.director;
    let rating =request.body.rating;
    let budget =request.body.budget;



    let query=`insert into movies  values('${movieid}','${moviename}','${director}','${rating}','${budget}')`;
    connection.query(query,function(err,result)
    {
        console.log(query)
        if (err==null)
        {
            Data=result;
            response.contentType("application/json");
            response.send(JSON.stringify(Data));
        }
        else
        {
          response.contentType("application/json");
            response.send(err)
        }
    });
    
});
movies.put("/movieid",function(request,response)
{  
    let movieid=request.body.movieid;
    let moviename=request.body.moviename;
    let director =request.body.director;
    let rating =request.body.rating;
    let budget =request.body.budget;



    let query=`update  movies set moviename='${moviename}', director='${director}',rating='${rating}', budget='${budget}' where movieid='${movieid}'`;
    connection.query(query,function(err,result)
    {
        console.log(query)
        if (err==null)
        {
            Data=result;
            response.contentType("application/json");
            response.send(JSON.stringify(Data));
        }
        else
        {
          response.contentType("application/json");
            response.send(err)
        }
    });
    
});






module.exports=movies;
