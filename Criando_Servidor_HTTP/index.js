/*const http =  require("http");

const hostname = "localhost";

const server = http.createServer((request, response)=>{

response.statusCode = 200;
response.setHeader("Content-type", "text/plain");
response.end("Hello Word");
})

server.listen(3333, hostname, ()=>{

console.log("Server running in localhost: 3333")


})*/

import  express  from "express";
import fs from "fs";
import https from "https";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req,res)=>{

res.json({message: "Hello Word"});

})
app.listen(3000, () => console.log("api rodando...."));

https.createServer({

cert: fs.readdirSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/Criando_Servidor_HTTP/certificate.crt"),
key:  fs.readdirSync("D:\Nova pasta\Aulas Full Stack\18º WEB 3.0\Node\Node\Node.js\Criando_Servidor_HTTP\Key.key")

}, app)
.listen(3001, () => console.log("rodando em https"))