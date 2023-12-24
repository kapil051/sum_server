import express from "express";
import cors from "cors";

  const app=express();
    const port=3000;

      app.use(cors);
    app.use(express.json());  
  
     app.get("/sum",(req,res)=>{

         let a=req.query.a;
         let b=req.query.b;

                console.log(a,b);

           let sum=parseInt(a)+parseInt(b); 
             res.send(sum.toString());

     })
       

     app.get('/',(req,res)=>{  
           res.json({"msg":"hello from backend"});
     })

  
  app.use((err,req,res,next)=>{
        res.status(404).json({"msg":"invalid input from last handler"});
           next();
  })

app.listen(port,()=>{
      console.log(`app listening on the port ${port}`);
}) 